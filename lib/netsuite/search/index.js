'use strict';

/**
 * NetSuite Search
 * @return {Search}
 */
var Search = module.exports = {};

Search.SearchPreferences = require('./searchPreferences');

// Search.Fields namespace
Search.Fields = require('./fields');

// Search types
Search.SearchRecord = require('./searchRecord');
Search.SearchRowBasic = require('./searchRowBasic');

Search.AccountSearchBasic = require('./accountSearchBasic');
Search.AccountingPeriodSearchBasic = require('./accountingPeriodSearchBasic');
Search.BillingScheduleSearchBasic = require('./billingScheduleSearchBasic');
Search.BudgetSearchBasic = require('./budgetSearchBasic');

Search.CustomerSearchAdvanced = require('./customerSearchAdvanced');
Search.CustomerSearchBasic = require('./customerSearchBasic');
Search.PaymentMethodSearchBasic = require('./paymentMethodSearchBasic');
Search.CustomerSearchRow = require('./customerSearchRow');
Search.CustomerSearchRowBasic = require('./customerSearchRowBasic');

Search.EmployeeSearchBasic = require('./employeeSearchBasic');

Search.ItemSearchBasic = require('./itemSearchBasic');
Search.ItemSearchAdvanced = require('./itemSearchAdvanced');
Search.ItemSearchRow = require('./itemSearchRow');
Search.ItemSearchRowBasic = require('./itemSearchRowBasic');
Search.ItemSearch = require('./itemSearch');

Search.TaskSearchBasic = require('./taskSearchBasic');
Search.TimeBillSearchBasic = require('./timeBillSearchBasic');
Search.TimeEntrySearchBasic = require('./timeEntrySearchBasic');
Search.TimeSheetSearchBasic = require('./timeSheetSearchBasic');
Search.TransactionSearchBasic = require('./transactionSearchBasic');
Search.TransactionSearchAdvanced = require('./transactionSearchAdvanced');
Search.TransactionSearch = require('./transactionSearch');
Search.InboundShipmentSearchBasic = require('./inboundShipmentSearchBasic');
Search.PaymentMethodSearchBasic = require('./paymentMethodSearchBasic');
