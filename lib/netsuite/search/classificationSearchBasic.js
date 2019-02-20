'use strict';

var util = require('util'),
  SearchRecord = require('./searchRecord');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/search/classificationsearchbasic.html?mode=package
 *
 * @class
 * @extends SearchRecord
 * @return {ClassificationSearchBasic}
 */
var ClassificationSearchBasic = module.exports = function ClassificationSearchBasic() {
  SearchRecord.call(this);
};

util.inherits(ClassificationSearchBasic, SearchRecord);

/**
 * @override
 */
ClassificationSearchBasic.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCommon:ClassificationSearchBasic'
  };

  return attrs;
};
