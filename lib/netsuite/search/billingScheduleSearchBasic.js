'use strict';

var util = require('util'),
  SearchRecord = require('./searchRecord');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/search/billingschedulesearchbasic.html?mode=package
 *
 * @class
 * @extends SearchRecord
 * @return {BillingScheduleSearchBasic}
 */
var BillingScheduleSearchBasic = module.exports = function BillingScheduleSearchBasic() {
  SearchRecord.call(this);
};

util.inherits(BillingScheduleSearchBasic, SearchRecord);

/**
 * @override
 */
BillingScheduleSearchBasic.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCommon:BillingScheduleSearchBasic'
  };

  return attrs;
};
