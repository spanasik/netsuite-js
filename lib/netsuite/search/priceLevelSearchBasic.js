'use strict';

var util = require('util'),
  SearchRecord = require('./searchRecord');

/**
 * https://system.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2014_2/schema/search/pricelevelsearchbasic.html?mode=package
 *
 * @class
 * @extends SearchRecord
 * @return {PriceLevelSearchBasic}
 */
var PriceLevelSearchBasic = module.exports = function PriceLevelSearchBasic() {
  SearchRecord.call(this);
};

util.inherits(PriceLevelSearchBasic, SearchRecord);

/**
 * @override
 */
PriceLevelSearchBasic.prototype.getAttributes = function() {
  var attrs = {
    'xsi:type': 'platformCommon:PriceLevelSearchBasic'
  };

  return attrs;
};
