'use strict';

var denodeify = require('denodeify');
var NetSuite = require('../');

var credentials = require('./credentials.json');
var config = new NetSuite.Configuration(credentials);
var service = new NetSuite.Service(config);

console.log('Creating NetSuite connection');

service
  .init(true)
  .then(function( /*client*/ ) {
    console.log('WSDL processed. Service description:');
    // console.log(service.config.client.describe());

    var recordRef = new NetSuite.Records.RecordRef();
    recordRef.internalId = 5946555;
    recordRef.type = 'salesOrder';

    console.log('Getting Employee record');
    return service.get(recordRef);
  })
  .then(function(result, raw, soapHeader) {
    if (result.readResponse.status.$attributes.isSuccess !== 'true') {
      console.error('Error');
      console.error(result.readResponse.status.statusDetail);
    }
    console.log(JSON.stringify(result, null, 2));
    // console.log('Last Request:');
    // console.log(service.config.client.lastRequest);
  })
  .catch(function(err) {
    console.error(err);
    console.error('Last Request:');
    console.error(service.config.client.lastRequest);
  });
