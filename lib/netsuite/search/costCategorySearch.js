'use strict';

var util = require('util'),
  SearchRecord = require('./searchRecord');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/search/costcategorysearch.html?mode=package
 *
 * @class
 * @extends SearchRecord
 * @return {CostCategorySearch}
 */
var CostCategorySearch = module.exports = function CostCategorySearch() {
  SearchRecord.call(this);
};

util.inherits(CostCategorySearch, SearchRecord);

/**
 * @override
 */
CostCategorySearch.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'listAcct:CostCategorySearch'
  };

  return attrs;
};
