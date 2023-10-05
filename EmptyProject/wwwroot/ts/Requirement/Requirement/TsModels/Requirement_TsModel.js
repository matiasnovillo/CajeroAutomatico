"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequirementModel = void 0;
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
//11 fields | Sub-models: 2 models  | Last modification on: 27/12/2022 20:52:58 | Stack: 9
var RequirementModel = /** @class */ (function () {
    function RequirementModel() {
    }
    //Queries
    RequirementModel.Select1ByRequirementId = function (RequirementId) {
        var URL = "/api/Requirement/Requirement/1/Select1ByRequirementIdToJSON/" + RequirementId;
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    RequirementModel.SelectAll = function () {
        var URL = "/api/Requirement/Requirement/1/SelectAllToJSON";
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    RequirementModel.SelectAllPaged = function (requirementSelectAllPaged) {
        var URL = "/api/Requirement/Requirement/1/SelectAllPagedToJSON";
        var Body = {
            QueryString: requirementSelectAllPaged.QueryString,
            ActualPageNumber: requirementSelectAllPaged.ActualPageNumber,
            RowsPerPage: requirementSelectAllPaged.RowsPerPage,
            SorterColumn: requirementSelectAllPaged.SorterColumn,
            SortToggler: requirementSelectAllPaged.SortToggler,
            RowCount: requirementSelectAllPaged.TotalRows,
            TotalPages: requirementSelectAllPaged.TotalPages,
            lstRequirementModel: requirementSelectAllPaged.lstRequirementModel
        };
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    //Non-Queries
    RequirementModel.DeleteByRequirementId = function (RequirementId) {
        var URL = "/api/Requirement/Requirement/1/DeleteByRequirementId/" + RequirementId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.delete(URL, Header));
    };
    RequirementModel.DeleteManyOrAll = function (DeleteType, Body) {
        var URL = "/api/Requirement/Requirement/1/DeleteManyOrAll/" + DeleteType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    RequirementModel.CopyByRequirementId = function (RequirementId) {
        var URL = "/api/Requirement/Requirement/1/CopyByRequirementId/" + RequirementId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        var Body = {};
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    RequirementModel.CopyManyOrAll = function (CopyType, Body) {
        var URL = "/api/Requirementing/Requirement/1/CopyManyOrAll/" + CopyType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    return RequirementModel;
}());
exports.RequirementModel = RequirementModel;
//# sourceMappingURL=Requirement_TsModel.js.map