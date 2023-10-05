"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequirementStateModel = void 0;
var Rx = require("rxjs");
var ajax_1 = require("rxjs/ajax");
/*
 * GUID:e6c09dfe-3a3e-461b-b3f9-734aee05fc7b
 *
 * Coded by fiyistack.com
 * Copyright © 2022
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
*/
//7 fields | Sub-models: 2 models  | Last modification on: 25/12/2022 18:16:36 | Stack: 9
var RequirementStateModel = /** @class */ (function () {
    function RequirementStateModel() {
    }
    //Queries
    RequirementStateModel.Select1ByRequirementStateId = function (RequirementStateId) {
        var URL = "/api/Requirement/RequirementState/1/Select1ByRequirementStateIdToJSON/" + RequirementStateId;
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    RequirementStateModel.SelectAll = function () {
        var URL = "/api/Requirement/RequirementState/1/SelectAllToJSON";
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    RequirementStateModel.SelectAllPaged = function (requirementstateSelectAllPaged) {
        var URL = "/api/Requirement/RequirementState/1/SelectAllPagedToJSON";
        var Body = {
            QueryString: requirementstateSelectAllPaged.QueryString,
            ActualPageNumber: requirementstateSelectAllPaged.ActualPageNumber,
            RowsPerPage: requirementstateSelectAllPaged.RowsPerPage,
            SorterColumn: requirementstateSelectAllPaged.SorterColumn,
            SortToggler: requirementstateSelectAllPaged.SortToggler,
            RowCount: requirementstateSelectAllPaged.TotalRows,
            TotalPages: requirementstateSelectAllPaged.TotalPages,
            lstRequirementStateModel: requirementstateSelectAllPaged.lstRequirementStateModel
        };
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    //Non-Queries
    RequirementStateModel.DeleteByRequirementStateId = function (RequirementStateId) {
        var URL = "/api/Requirement/RequirementState/1/DeleteByRequirementStateId/" + RequirementStateId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.delete(URL, Header));
    };
    RequirementStateModel.DeleteManyOrAll = function (DeleteType, Body) {
        var URL = "/api/Requirement/RequirementState/1/DeleteManyOrAll/" + DeleteType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    RequirementStateModel.CopyByRequirementStateId = function (RequirementStateId) {
        var URL = "/api/Requirement/RequirementState/1/CopyByRequirementStateId/" + RequirementStateId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        var Body = {};
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    RequirementStateModel.CopyManyOrAll = function (CopyType, Body) {
        var URL = "/api/RequirementStateing/RequirementState/1/CopyManyOrAll/" + CopyType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    return RequirementStateModel;
}());
exports.RequirementStateModel = RequirementStateModel;
//# sourceMappingURL=RequirementState_TsModel.js.map