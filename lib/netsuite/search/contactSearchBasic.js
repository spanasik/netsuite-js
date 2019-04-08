'use strict';

var util = require('util'),
  SearchRecord = require('./searchRecord');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2017_2/schema/search/ContactSearchBasic.html?mode=package
 *
 * @class
 * @extends SearchRecord
 * @return {ContactSearchBasic}
 */
var ContactSearchBasic = module.exports = function ContactSearchBasic() {
  SearchRecord.call(this);
};

util.inherits(ContactSearchBasic, SearchRecord);

/**
 * @override
 */
ContactSearchBasic.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCommon:ContactSearchBasic'
  };

  return attrs;
};
