'use strict';

var util = require('util'),
  SearchRecord = require('./searchRecord');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/search/taxtypesearch.html?mode=package
 *
 * @class
 * @extends SearchRecord
 * @return {TaxTypeSearch}
 */
var TaxTypeSearch = module.exports = function TaxTypeSearch() {
  SearchRecord.call(this);
};

util.inherits(TaxTypeSearch, SearchRecord);

/**
 * @override
 */
TaxTypeSearch.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'listAcct:TaxTypeSearch'
  };

  return attrs;
};
