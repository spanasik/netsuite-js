'use strict';

/**
 * NetSuite Search and SearchColumn Fields
 * @return {Fields}
 1*/
var Fields = module.exports = {};

// Search fields
Fields.SearchStringField = require('./searchStringField');
Fields.SearchDoubleField = require('./searchDoubleField');
Fields.SearchDateField = require('./searchDateField');
Fields.SearchMultiSelectField = require('./SearchMultiSelectField');
Fields.SearchEnumMultiSelectField = require('./SearchEnumMultiSelectField');

// SearchColumn fields
Fields.SearchColumnDoubleField = require('./searchColumnDoubleField');
Fields.SearchColumnLongField = require('./searchColumnLongField');
Fields.SearchColumnSelectField = require('./searchColumnSelectField');
Fields.SearchColumnStringField = require('./searchColumnStringField');
