'use strict';

var util = require('util'),
  SearchRecord = require('./searchRecord');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/search/vendorcategorysearchbasic.html?mode=package
 *
 * @class
 * @extends SearchRecord
 * @return {VendorCategorySearchBasic}
 */
var VendorCategorySearchBasic = module.exports = function VendorCategorySearchBasic() {
  SearchRecord.call(this);
};

util.inherits(VendorCategorySearchBasic, SearchRecord);

/**
 * @override
 */
VendorCategorySearchBasic.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCommon:VendorCategorySearchBasic'
  };

  return attrs;
};
