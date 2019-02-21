'use strict';

var util = require('util'),
  SearchRecord = require('./searchRecord');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/search/taxgroupsearch.html?mode=package
 *
 * @class
 * @extends SearchRecord
 * @return {TaxGroupSearch}
 */
var TaxGroupSearch = module.exports = function TaxGroupSearch() {
  SearchRecord.call(this);
};

util.inherits(TaxGroupSearch, SearchRecord);

/**
 * @override
 */
TaxGroupSearch.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'listAcct:TaxGroupSearch'
  };

  return attrs;
};
