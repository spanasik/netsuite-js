'use strict';

var util = require('util'),
  SearchRecord = require('./searchRecord');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/search/customercategorysearchbasic.html?mode=package
 *
 * @class
 * @extends SearchRecord
 * @return {CustomerCategorySearchBasic}
 */
var CustomerCategorySearchBasic = module.exports = function CustomerCategorySearchBasic() {
  SearchRecord.call(this);
};

util.inherits(CustomerCategorySearchBasic, SearchRecord);

/**
 * @override
 */
CustomerCategorySearchBasic.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCommon:CustomerCategorySearchBasic'
  };

  return attrs;
};
