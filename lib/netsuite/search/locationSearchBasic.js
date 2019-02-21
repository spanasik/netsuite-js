'use strict';

var util = require('util'),
  SearchRecord = require('./searchRecord');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/search/locationsearchbasic.html?mode=package
 *
 * @class
 * @extends SearchRecord
 * @return {LocationSearchBasic}
 */
var LocationSearchBasic = module.exports = function LocationSearchBasic() {
  SearchRecord.call(this);
};

util.inherits(LocationSearchBasic, SearchRecord);

/**
 * @override
 */
LocationSearchBasic.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCommon:LocationSearchBasic'
  };

  return attrs;
};
