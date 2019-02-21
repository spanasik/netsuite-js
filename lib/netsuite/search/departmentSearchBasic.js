'use strict';

var util = require('util'),
  SearchRecord = require('./searchRecord');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/search/departmentsearchbasic.html?mode=package
 *
 * @class
 * @extends SearchRecord
 * @return {DepartmentSearchBasic}
 */
var DepartmentSearchBasic = module.exports = function DepartmentSearchBasic() {
  SearchRecord.call(this);
};

util.inherits(DepartmentSearchBasic, SearchRecord);

/**
 * @override
 */
DepartmentSearchBasic.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCommon:DepartmentSearchBasic'
  };

  return attrs;
};
