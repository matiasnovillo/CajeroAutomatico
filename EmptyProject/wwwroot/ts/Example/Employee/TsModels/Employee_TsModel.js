"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModel = void 0;
var Rx = require("rxjs");
var ajax_1 = require("rxjs/ajax");
/*
 * GUID:e6c09dfe-3a3e-461b-b3f9-734aee05fc7b
 *
 * Coded by fiyistack.com
 * Copyright © 2023
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
*/
//9 fields | Sub-models: 0 models  | Last modification on: 29/07/2023 20:34:31 | Stack: 9
var EmployeeModel = /** @class */ (function () {
    function EmployeeModel() {
    }
    //Queries
    EmployeeModel.Select1ByEmployeeId = function (EmployeeId) {
        var URL = "/api/Example/Employee/1/Select1ByEmployeeIdToJSON/" + EmployeeId;
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    EmployeeModel.SelectAll = function () {
        var URL = "/api/Example/Employee/1/SelectAllToJSON";
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    EmployeeModel.SelectAllPaged = function (employeeSelectAllPaged) {
        var URL = "/api/Example/Employee/1/SelectAllPagedToJSON";
        var Body = {
            QueryString: employeeSelectAllPaged.QueryString,
            ActualPageNumber: employeeSelectAllPaged.ActualPageNumber,
            RowsPerPage: employeeSelectAllPaged.RowsPerPage,
            SorterColumn: employeeSelectAllPaged.SorterColumn,
            SortToggler: employeeSelectAllPaged.SortToggler,
            RowCount: employeeSelectAllPaged.TotalRows,
            TotalPages: employeeSelectAllPaged.TotalPages,
            lstEmployeeModel: employeeSelectAllPaged.lstEmployeeModel
        };
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    //Non-Queries
    EmployeeModel.DeleteByEmployeeId = function (EmployeeId) {
        var URL = "/api/Example/Employee/1/DeleteByEmployeeId/" + EmployeeId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.delete(URL, Header));
    };
    EmployeeModel.DeleteManyOrAll = function (DeleteType, Body) {
        var URL = "/api/Example/Employee/1/DeleteManyOrAll/" + DeleteType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    EmployeeModel.CopyByEmployeeId = function (EmployeeId) {
        var URL = "/api/Example/Employee/1/CopyByEmployeeId/" + EmployeeId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        var Body = {};
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    EmployeeModel.CopyManyOrAll = function (CopyType, Body) {
        var URL = "/api/Employeeing/Employee/1/CopyManyOrAll/" + CopyType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    return EmployeeModel;
}());
exports.EmployeeModel = EmployeeModel;
//# sourceMappingURL=Employee_TsModel.js.map