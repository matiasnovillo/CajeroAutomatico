"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequirementPriorityModel = void 0;
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
//8 fields | Sub-models: 2 models  | Last modification on: 25/12/2022 18:13:11 | Stack: 9
var RequirementPriorityModel = /** @class */ (function () {
    function RequirementPriorityModel() {
    }
    //Queries
    RequirementPriorityModel.Select1ByRequirementPriorityId = function (RequirementPriorityId) {
        var URL = "/api/Requirement/RequirementPriority/1/Select1ByRequirementPriorityIdToJSON/" + RequirementPriorityId;
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    RequirementPriorityModel.SelectAll = function () {
        var URL = "/api/Requirement/RequirementPriority/1/SelectAllToJSON";
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    RequirementPriorityModel.SelectAllPaged = function (requirementprioritySelectAllPaged) {
        var URL = "/api/Requirement/RequirementPriority/1/SelectAllPagedToJSON";
        var Body = {
            QueryString: requirementprioritySelectAllPaged.QueryString,
            ActualPageNumber: requirementprioritySelectAllPaged.ActualPageNumber,
            RowsPerPage: requirementprioritySelectAllPaged.RowsPerPage,
            SorterColumn: requirementprioritySelectAllPaged.SorterColumn,
            SortToggler: requirementprioritySelectAllPaged.SortToggler,
            RowCount: requirementprioritySelectAllPaged.TotalRows,
            TotalPages: requirementprioritySelectAllPaged.TotalPages,
            lstRequirementPriorityModel: requirementprioritySelectAllPaged.lstRequirementPriorityModel
        };
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    //Non-Queries
    RequirementPriorityModel.DeleteByRequirementPriorityId = function (RequirementPriorityId) {
        var URL = "/api/Requirement/RequirementPriority/1/DeleteByRequirementPriorityId/" + RequirementPriorityId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.delete(URL, Header));
    };
    RequirementPriorityModel.DeleteManyOrAll = function (DeleteType, Body) {
        var URL = "/api/Requirement/RequirementPriority/1/DeleteManyOrAll/" + DeleteType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    RequirementPriorityModel.CopyByRequirementPriorityId = function (RequirementPriorityId) {
        var URL = "/api/Requirement/RequirementPriority/1/CopyByRequirementPriorityId/" + RequirementPriorityId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        var Body = {};
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    RequirementPriorityModel.CopyManyOrAll = function (CopyType, Body) {
        var URL = "/api/RequirementPrioritying/RequirementPriority/1/CopyManyOrAll/" + CopyType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    return RequirementPriorityModel;
}());
exports.RequirementPriorityModel = RequirementPriorityModel;
//# sourceMappingURL=RequirementPriority_TsModel.js.map