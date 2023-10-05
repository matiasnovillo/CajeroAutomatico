"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequirementNoteModel = void 0;
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
//9 fields | Sub-models: 0 models  | Last modification on: 28/12/2022 17:28:12 | Stack: 9
var RequirementNoteModel = /** @class */ (function () {
    function RequirementNoteModel() {
    }
    //Queries
    RequirementNoteModel.Select1ByRequirementNoteId = function (RequirementNoteId) {
        var URL = "/api/Requirement/RequirementNote/1/Select1ByRequirementNoteIdToJSON/" + RequirementNoteId;
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    RequirementNoteModel.SelectAll = function () {
        var URL = "/api/Requirement/RequirementNote/1/SelectAllToJSON";
        return Rx.from((0, ajax_1.ajax)(URL));
    };
    RequirementNoteModel.SelectAllPaged = function (requirementnoteSelectAllPaged, RequirementId) {
        var URL = "/api/Requirement/RequirementNote/1/SelectAllPagedToJSON/" + RequirementId;
        var Body = {
            QueryString: requirementnoteSelectAllPaged.QueryString,
            ActualPageNumber: requirementnoteSelectAllPaged.ActualPageNumber,
            RowsPerPage: requirementnoteSelectAllPaged.RowsPerPage,
            SorterColumn: requirementnoteSelectAllPaged.SorterColumn,
            SortToggler: requirementnoteSelectAllPaged.SortToggler,
            RowCount: requirementnoteSelectAllPaged.TotalRows,
            TotalPages: requirementnoteSelectAllPaged.TotalPages,
            lstRequirementNoteModel: requirementnoteSelectAllPaged.lstRequirementNoteModel
        };
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    //Non-Queries
    RequirementNoteModel.DeleteByRequirementNoteId = function (RequirementNoteId) {
        var URL = "/api/Requirement/RequirementNote/1/DeleteByRequirementNoteId/" + RequirementNoteId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.delete(URL, Header));
    };
    RequirementNoteModel.DeleteManyOrAll = function (DeleteType, Body) {
        var URL = "/api/Requirement/RequirementNote/1/DeleteManyOrAll/" + DeleteType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    RequirementNoteModel.CopyByRequirementNoteId = function (RequirementNoteId) {
        var URL = "/api/Requirement/RequirementNote/1/CopyByRequirementNoteId/" + RequirementNoteId;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        var Body = {};
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    RequirementNoteModel.CopyManyOrAll = function (CopyType, Body) {
        var URL = "/api/RequirementNoteing/RequirementNote/1/CopyManyOrAll/" + CopyType;
        var Header = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax_1.ajax.post(URL, Body, Header));
    };
    return RequirementNoteModel;
}());
exports.RequirementNoteModel = RequirementNoteModel;
//# sourceMappingURL=RequirementNote_TsModel.js.map