"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequirementChangehistoryModel = void 0;
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
//9 fields | Sub-models: 0 models  | Last modification on: 25/12/2022 18:01:44 | Stack: 9
var RequirementChangehistoryModel = /** @class */ (function () {
    function RequirementChangehistoryModel() {
    }
    //Queries
    RequirementChangehistoryModel.Select1ByRequirementChangehistoryId = function (RequirementChangehistoryId) {
        var URL = "/api/Requirement/RequirementChangehistory/1/Select1ByRequirementChangehistoryIdToJSON/" + RequirementChangehistoryId;
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    RequirementChangehistoryModel.SelectAll = function () {
        var URL = "/api/Requirement/RequirementChangehistory/1/SelectAllToJSON";
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    RequirementChangehistoryModel.SelectAllPaged = function (requirementchangehistorySelectAllPaged, RequirementId) {
        var URL = "/api/Requirement/RequirementChangehistory/1/SelectAllPagedToJSON/" + RequirementId;
        var Body = {
            requirementchangehistoryQueryString: requirementchangehistorySelectAllPaged.requirementchangehistoryQueryString,
            requirementchangehistoryActualPageNumber: requirementchangehistorySelectAllPaged.requirementchangehistoryActualPageNumber,
            requirementchangehistoryRowsPerPage: requirementchangehistorySelectAllPaged.requirementchangehistoryRowsPerPage,
            requirementchangehistorySorterColumn: requirementchangehistorySelectAllPaged.requirementchangehistorySorterColumn,
            requirementchangehistorySortToggler: requirementchangehistorySelectAllPaged.requirementchangehistorySortToggler,
            requirementchangehistoryRowCount: requirementchangehistorySelectAllPaged.requirementchangehistoryTotalRows,
            requirementchangehistoryTotalPages: requirementchangehistorySelectAllPaged.requirementchangehistoryTotalPages,
            lstRequirementChangehistoryModel: requirementchangehistorySelectAllPaged.lstRequirementChangehistoryModel
        };
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    //Non-Queries
    RequirementChangehistoryModel.DeleteByRequirementChangehistoryId = function (RequirementChangehistoryId) {
        var URL = "/api/Requirement/RequirementChangehistory/1/DeleteByRequirementChangehistoryId/" + RequirementChangehistoryId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.delete(URL, Header));
    };
    RequirementChangehistoryModel.DeleteManyOrAll = function (DeleteType, Body) {
        var URL = "/api/Requirement/RequirementChangehistory/1/DeleteManyOrAll/" + DeleteType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    RequirementChangehistoryModel.CopyByRequirementChangehistoryId = function (RequirementChangehistoryId) {
        var URL = "/api/Requirement/RequirementChangehistory/1/CopyByRequirementChangehistoryId/" + RequirementChangehistoryId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        var Body = {};
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    RequirementChangehistoryModel.CopyManyOrAll = function (CopyType, Body) {
        var URL = "/api/RequirementChangehistorying/RequirementChangehistory/1/CopyManyOrAll/" + CopyType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    return RequirementChangehistoryModel;
}());
exports.RequirementChangehistoryModel = RequirementChangehistoryModel;
//# sourceMappingURL=RequirementChangehistory_TsModel.js.map