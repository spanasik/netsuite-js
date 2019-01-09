/*
 * netsuite-js
 * https://github.com/CrossLead/netsuite-js
 *
 * Copyright (c) 2015 Christian Yang
 * Licensed under the Apache license.
 */

'use strict';

var denodeify = require('denodeify');
var NetSuite = require('../');

var credentials = require('./credentials.json');
var config = new NetSuite.Configuration(credentials);
var service = new NetSuite.Service(config);

console.log('Creating NetSuite connection');

service
  .init(true /* skipDiscovery */ )
  .then(function( /*client*/ ) {
    console.log('WSDL processed');

    var preferences = new NetSuite.Search.SearchPreferences();
    preferences.pageSize = 300;
    service.setSearchPreferences(preferences);

    var search = new NetSuite.Search.ItemSearchAdvanced();
    search.columns = new NetSuite.Search.ItemSearchRow();
    search.columns.basic = new NetSuite.Search.ItemSearchRowBasic();

    var itemIdField = new NetSuite.Search.Fields.SearchColumnStringField();
    itemIdField.field = 'itemId';
    search.columns.basic.searchColumnFields.push(itemIdField);

    var internalIdField = new NetSuite.Search.Fields.SearchColumnSelectField();
    internalIdField.field = 'internalId';
    search.columns.basic.searchColumnFields.push(internalIdField);
    /*
    var balanceField = new NetSuite.Search.Fields.SearchColumnDoubleField();
    balanceField.field = 'balance';
    search.columns.basic.searchColumnFields.push(balanceField);

    var daysOverdueField = new NetSuite.Search.Fields.SearchColumnLongField();
    daysOverdueField.field = 'daysOverdue';
    search.columns.basic.searchColumnFields.push(daysOverdueField);
    */
    console.log('Performing SearchAdvanced');
    return service.search(search);
  })
  .then(function(result, raw, soapHeader) {
    if (result.searchResult.status.$attributes.isSuccess !== 'true') {
      console.error('Error');
      console.error(result.searchResult.status.statusDetail);
    }
    console.log('Records found: ' + result.searchResult.totalRecords);
    console.log(JSON.stringify(result.searchResult, null, 2));
    console.log('Last Request:');
    console.log(service.config.client.lastRequest);
  })
  .catch(function(err) {
    console.error(err);
    console.error('Last Request:');
    console.error(service.config.client.lastRequest);
  });
