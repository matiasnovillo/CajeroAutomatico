"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequirementFileModel = void 0;
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
//8 fields | Sub-models: 0 models  | Last modification on: 29/12/2022 10:16:50 | Stack: 9
var RequirementFileModel = /** @class */ (function () {
    function RequirementFileModel() {
    }
    //Queries
    RequirementFileModel.Select1ByRequirementFileId = function (RequirementFileId) {
        var URL = "/api/Requirement/RequirementFile/1/Select1ByRequirementFileIdToJSON/" + RequirementFileId;
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    RequirementFileModel.SelectAll = function () {
        var URL = "/api/Requirement/RequirementFile/1/SelectAllToJSON";
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    RequirementFileModel.SelectAllPaged = function (requirementfileSelectAllPaged, RequirementId) {
        var URL = "/api/Requirement/RequirementFile/1/SelectAllPagedToJSON/" + RequirementId;
        var Body = {
            requirementfileQueryString: requirementfileSelectAllPaged.requirementfileQueryString,
            requirementfileActualPageNumber: requirementfileSelectAllPaged.requirementfileActualPageNumber,
            requirementfileRowsPerPage: requirementfileSelectAllPaged.requirementfileRowsPerPage,
            requirementfileSorterColumn: requirementfileSelectAllPaged.requirementfileSorterColumn,
            requirementfileSortToggler: requirementfileSelectAllPaged.requirementfileSortToggler,
            requirementfileRowCount: requirementfileSelectAllPaged.requirementfileTotalRows,
            requirementfileTotalPages: requirementfileSelectAllPaged.requirementfileTotalPages,
            lstRequirementFileModel: requirementfileSelectAllPaged.lstRequirementFileModel
        };
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    //Non-Queries
    RequirementFileModel.DeleteByRequirementFileId = function (RequirementFileId) {
        var URL = "/api/Requirement/RequirementFile/1/DeleteByRequirementFileId/" + RequirementFileId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.delete(URL, Header));
    };
    RequirementFileModel.DeleteManyOrAll = function (DeleteType, Body) {
        var URL = "/api/Requirement/RequirementFile/1/DeleteManyOrAll/" + DeleteType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    RequirementFileModel.CopyByRequirementFileId = function (RequirementFileId) {
        var URL = "/api/Requirement/RequirementFile/1/CopyByRequirementFileId/" + RequirementFileId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        var Body = {};
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    RequirementFileModel.CopyManyOrAll = function (CopyType, Body) {
        var URL = "/api/RequirementFileing/RequirementFile/1/CopyManyOrAll/" + CopyType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    return RequirementFileModel;
}());
exports.RequirementFileModel = RequirementFileModel;
//# sourceMappingURL=RequirementFile_TsModel.js.map