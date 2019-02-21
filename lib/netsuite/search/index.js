'use strict';

/**
 * NetSuite Search
 * @return {Search}
 */
var Search = module.exports = {};

Search.AccountingPeriodSearchBasic = require('./accountingPeriodSearchBasic');
Search.AccountSearchBasic = require('./accountSearchBasic');

Search.BillingScheduleSearchBasic = require('./billingScheduleSearchBasic');
Search.BudgetSearchBasic = require('./budgetSearchBasic');

Search.ClassificationSearchBasic = require('./classificationSearchBasic');
Search.CustomerCategorySearchBasic = require('./customerCategorySearchBasic');
Search.CustomerSearchAdvanced = require('./customerSearchAdvanced');
Search.CustomerSearchBasic = require('./customerSearchBasic');
Search.CustomerSearchRow = require('./customerSearchRow');
Search.CustomerSearchRowBasic = require('./customerSearchRowBasic');

Search.DepartmentSearchBasic = require('./departmentSearchBasic');

Search.EmployeeSearchBasic = require('./employeeSearchBasic');
Search.ExpenseCategorySearchBasic = require('./expenseCategorySearchBasic');

Search.Fields = require('./fields');

Search.InboundShipmentSearchBasic = require('./inboundShipmentSearchBasic');
Search.ItemSearch = require('./itemSearch');
Search.ItemSearchAdvanced = require('./itemSearchAdvanced');
Search.ItemSearchBasic = require('./itemSearchBasic');
Search.ItemSearchRow = require('./itemSearchRow');
Search.ItemSearchRowBasic = require('./itemSearchRowBasic');

Search.LocationSearchBasic = require('./locationSearchBasic');

Search.PaymentMethodSearchBasic = require('./paymentMethodSearchBasic');
Search.PaymentMethodSearchBasic = require('./paymentMethodSearchBasic');
Search.PriceLevelSearchBasic = require('./priceLevelSearchBasic');

Search.SearchPreferences = require('./searchPreferences');
Search.SearchRecord = require('./searchRecord');
Search.SearchRowBasic = require('./searchRowBasic');

Search.TaskSearchBasic = require('./taskSearchBasic');
Search.TimeBillSearchBasic = require('./timeBillSearchBasic');
Search.TimeEntrySearchBasic = require('./timeEntrySearchBasic');
Search.TimeSheetSearchBasic = require('./timeSheetSearchBasic');
Search.TransactionSearch = require('./transactionSearch');
Search.TransactionSearchAdvanced = require('./transactionSearchAdvanced');
Search.TransactionSearchBasic = require('./transactionSearchBasic');

Search.VendorCategorySearchBasic = require('./vendorCategorySearchBasic');
