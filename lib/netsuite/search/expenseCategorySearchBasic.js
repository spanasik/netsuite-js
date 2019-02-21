'use strict';

var util = require('util'),
  SearchRecord = require('./searchRecord');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/search/expensecategorysearchbasic.html?mode=package
 *
 * @class
 * @extends SearchRecord
 * @return {ExpenseCategorySearchBasic}
 */
var ExpenseCategorySearchBasic = module.exports = function ExpenseCategorySearchBasic() {
  SearchRecord.call(this);
};

util.inherits(ExpenseCategorySearchBasic, SearchRecord);

/**
 * @override
 */
ExpenseCategorySearchBasic.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCommon:ExpenseCategorySearchBasic'
  };

  return attrs;
};
