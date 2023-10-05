"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Import libraries to use
var RequirementNote_TsModel_1 = require("../../RequirementNote/TsModels/RequirementNote_TsModel");
var $ = require("jquery");
require("bootstrap-notify");
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
//Stack: 10
//Last modification on: 28/12/2022 17:28:12
//Set default values
var LastTopDistance = 0;
var QueryString = "";
var ActualPageNumber = 1;
var RowsPerPage = 50;
var SorterColumn = "";
var SortToggler = false;
var TotalPages = 0;
var TotalRows = 0;
var ViewToggler = "List";
var ScrollDownNSearchFlag = false;
var RequirementNoteQuery = /** @class */ (function () {
    function RequirementNoteQuery() {
    }
    RequirementNoteQuery.SelectAllPagedToHTML = function (request_requirementnoteSelectAllPaged) {
        //Used for list view
        $(window).off("scroll");
        //Load some part of table
        var TableContent = "<thead class=\"thead-light\">\n    <tr>\n        <th scope=\"col\">\n            <div>\n                <input id=\"requirementnote-table-check-all\" type=\"checkbox\">\n            </div>\n        </th>\n        <th scope=\"col\">\n            <button value=\"RequirementNoteId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Note ID\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Active\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Active\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"DateTimeCreation\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Date Time Creation\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"DateTimeLastModification\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Date Time Last Modification\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"UserCreationId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                User Creation\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"UserLastModificationId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                User Last Modification\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Title\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Title\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Body\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Body\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"RequirementId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Requirement ID\n            </button>\n        </th>\n        \n        <th scope=\"col\"></th>\n    </tr>\n</thead>\n<tbody>";
        var ListContent = "";
        RequirementNote_TsModel_1.RequirementNoteModel.SelectAllPaged(request_requirementnoteSelectAllPaged, $("#requirement-requirement-requirementid-input").val()).subscribe({
            next: function (newrow) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                //Only works when there is data available
                if (newrow.status != 204) {
                    var response_requirementnoteQuery = newrow.response;
                    //Set to default values if they are null
                    QueryString = (_a = response_requirementnoteQuery.QueryString) !== null && _a !== void 0 ? _a : "";
                    ActualPageNumber = (_b = response_requirementnoteQuery.ActualPageNumber) !== null && _b !== void 0 ? _b : 0;
                    RowsPerPage = (_c = response_requirementnoteQuery.RowsPerPage) !== null && _c !== void 0 ? _c : 0;
                    SorterColumn = (_d = response_requirementnoteQuery.SorterColumn) !== null && _d !== void 0 ? _d : "";
                    SortToggler = (_e = response_requirementnoteQuery.SortToggler) !== null && _e !== void 0 ? _e : false;
                    TotalRows = (_f = response_requirementnoteQuery.TotalRows) !== null && _f !== void 0 ? _f : 0;
                    TotalPages = (_g = response_requirementnoteQuery.TotalPages) !== null && _g !== void 0 ? _g : 0;
                    //Query string
                    $("#requirement-requirementnote-query-string").attr("placeholder", "Search... (".concat(TotalRows, " records)"));
                    //Total pages of pagination
                    $("#requirement-requirementnote-total-pages-lg, #requirement-requirementnote-total-pages").html(TotalPages.toString());
                    //Actual page number of pagination
                    $("#requirement-requirementnote-actual-page-number-lg, #requirement-requirementnote-actual-page-number").html(ActualPageNumber.toString());
                    //If we are at the final of book disable next and last buttons in pagination
                    if (ActualPageNumber === TotalPages) {
                        $("#requirement-requirementnote-lnk-next-page-lg, #requirement-requirementnote-lnk-next-page").attr("disabled", "disabled");
                        $("#requirement-requirementnote-lnk-last-page-lg, #requirement-requirementnote-lnk-last-page").attr("disabled", "disabled");
                        $("#requirement-requirementnote-search-more-button-in-list").html("");
                    }
                    else {
                        $("#requirement-requirementnote-lnk-next-page-lg, #requirement-requirementnote-lnk-next-page").removeAttr("disabled");
                        $("#requirement-requirementnote-lnk-last-page-lg, #requirement-requirementnote-lnk-last-page").removeAttr("disabled");
                        //Scroll arrow for list view
                        $("#requirement-requirementnote-search-more-button-in-list").html("<i class='fas fa-2x fa-chevron-down'></i>");
                    }
                    //If we are at the begining of the book disable previous and first buttons in pagination
                    if (ActualPageNumber === 1) {
                        $("#requirement-requirementnote-lnk-previous-page-lg, #requirement-requirementnote-lnk-previous-page").attr("disabled", "disabled");
                        $("#requirement-requirementnote-lnk-first-page-lg, #requirement-requirementnote-lnk-first-page").attr("disabled", "disabled");
                    }
                    else {
                        $("#requirement-requirementnote-lnk-previous-page-lg, #requirement-requirementnote-lnk-previous-page").removeAttr("disabled");
                        $("#requirement-requirementnote-lnk-first-page-lg, #requirement-requirementnote-lnk-first-page").removeAttr("disabled");
                    }
                    //If book is empty set to default pagination values
                    if (((_h = response_requirementnoteQuery === null || response_requirementnoteQuery === void 0 ? void 0 : response_requirementnoteQuery.lstRequirementNoteModel) === null || _h === void 0 ? void 0 : _h.length) === 0) {
                        $("#requirement-requirementnote-lnk-previous-page-lg, #requirement-requirementnote-lnk-previous-page").attr("disabled", "disabled");
                        $("#requirement-requirementnote-lnk-first-page-lg, #requirement-requirementnote-lnk-first-page").attr("disabled", "disabled");
                        $("#requirement-requirementnote-lnk-next-page-lg, #requirement-requirementnote-lnk-next-page").attr("disabled", "disabled");
                        $("#requirement-requirementnote-lnk-last-page-lg, #requirement-requirementnote-lnk-last-page").attr("disabled", "disabled");
                        $("#requirement-requirementnote-total-pages-lg, #requirement-requirementnote-total-pages").html("1");
                        $("#requirement-requirementnote-actual-page-number-lg, #requirement-requirementnote-actual-page-number").html("1");
                    }
                    //Read data book
                    (_j = response_requirementnoteQuery === null || response_requirementnoteQuery === void 0 ? void 0 : response_requirementnoteQuery.lstRequirementNoteModel) === null || _j === void 0 ? void 0 : _j.forEach(function (row) {
                        TableContent += "<tr>\n    <!-- Checkbox -->\n    <td>\n        <div>\n            <input class=\"requirementnote-table-checkbox-for-row\" value=\"".concat(row.RequirementNoteId, "\" type=\"checkbox\">\n        </div>\n    </td>\n    <!-- Data -->\n    <td class=\"text-left text-light\">\n        <i class=\"fas fa-key\"></i> ").concat(row.RequirementNoteId, "\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-toggle-on\"></i> ").concat(row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>", "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-calendar\"></i> ").concat(row.DateTimeCreation, "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-calendar\"></i> ").concat(row.DateTimeLastModification, "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-key\"></i> ").concat(row.UserCreationIdFantasyName, "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-key\"></i> ").concat(row.UserLastModificationIdFantasyName, "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong><i class=\"fas fa-font\">\n            </i> ").concat(row.Title, "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <i class=\"fas fa-font\"></i> ").concat(row.Body, "\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-key\"></i> ").concat(row.RequirementId, "\n        </strong>\n    </td>\n    \n    <!-- Actions -->\n    <td class=\"text-right\">\n        <div class=\"dropdown\">\n            <button class=\"btn btn-icon-only text-danger\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-trash\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                <button class=\"dropdown-item text-danger requirement-requirementnote-table-delete-button\" value=\"").concat(row.RequirementNoteId, "\" type=\"button\">\n                    <i class=\"fas fa-exclamation-triangle\"></i> Yes, delete\n                </button>\n            </div>\n        </div>\n    </td>\n</tr>");
                        ListContent += "<div class=\"row mx-2\">\n    <div class=\"col-sm\">\n        <div class=\"card bg-gradient-primary mb-2\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col text-truncate\">\n                        <span class=\"text-white text-light mb-4\">\n                           Note ID <i class=\"fas fa-key\"></i> ".concat(row.RequirementNoteId, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Active <i class=\"fas fa-toggle-on\"></i> ").concat(row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>", "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Date Time Creation <i class=\"fas fa-calendar\"></i> ").concat(row.DateTimeCreation, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Date Time Last Modification <i class=\"fas fa-calendar\"></i> ").concat(row.DateTimeLastModification, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           User Creation <i class=\"fas fa-key\"></i> ").concat(row.UserCreationIdFantasyName, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           User Last Modification <i class=\"fas fa-key\"></i> ").concat(row.UserLastModificationIdFantasyName, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Title <i class=\"fas fa-font\"></i> ").concat(row.Title, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Body <i class=\"fas fa-font\"></i> ").concat(row.Body, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Requirement ID <i class=\"fas fa-key\"></i> ").concat(row.RequirementId, "\n                        </span>\n                        <br/>\n                        \n                    </div>\n                    <div class=\"col-auto\">\n                    </div>\n                </div>\n                <!-- Actions -->\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"justify-content-end text-right mt-2\">\n                            <div class=\"dropup\">\n                                <a class=\"icon icon-shape bg-white icon-sm text-primary rounded-circle shadow\" href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                    <i class=\"fas fa-ellipsis-v\"></i>\n                                </a>\n                                <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                                    <button value=\"").concat(row.RequirementNoteId, "\" class=\"dropdown-item text-danger requirement-requirementnote-list-delete-button\" type=\"button\">\n                                        <i class=\"fas fa-trash\"></i>&nbsp;Delete\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
                    });
                    //If view table is activated, clear table view, if not, clear list view
                    if (ViewToggler === "Table") {
                        $("#requirement-requirementnote-body-and-head-table").html("");
                        $("#requirement-requirementnote-body-and-head-table").html(TableContent);
                    }
                    else {
                        //Used for list view
                        if (ScrollDownNSearchFlag) {
                            $("#requirement-requirementnote-body-list").append(ListContent);
                            ScrollDownNSearchFlag = false;
                        }
                        else {
                            //Clear list view
                            $("#requirement-requirementnote-body-list").html("");
                            $("#requirement-requirementnote-body-list").html(ListContent);
                        }
                    }
                }
                else {
                    //ERROR
                    // @ts-ignore
                    $.notify({ icon: "fas fa-exclamation-triangle", message: "No registers found" }, { type: "warning", placement: { from: "bottom", align: "center" } });
                }
            },
            complete: function () {
                //Execute ScrollDownNSearch function when the user scroll the page
                $(window).on("scroll", ScrollDownNSearch);
                //Add final content to TableContent
                TableContent += "</tbody>\n                                </table>";
                //Check button inside list view
                $(".requirement-requirementnote-checkbox-list").on("click", function (e) {
                    //Toggler
                    if ($(this).hasClass("list-row-checked")) {
                        $(this).html("<a class=\"icon icon-shape bg-white icon-sm rounded-circle shadow\" href=\"javascript:void(0)\" role=\"button\" data-toggle=\"tooltip\" data-original-title=\"check\">\n                                                            <i class=\"fas fa-circle text-white\"></i>\n                                                        </a>");
                        $(this).removeClass("list-row-checked").addClass("list-row-unchecked");
                    }
                    else {
                        $(this).html("<a class=\"icon icon-shape bg-white icon-sm text-primary rounded-circle shadow\" href=\"javascript:void(0)\" role=\"button\" data-toggle=\"tooltip\" data-original-title=\"check\">\n                                                            <i class=\"fas fa-check\"></i>\n                                                        </a>");
                        $(this).removeClass("list-row-unchecked").addClass("list-row-checked");
                    }
                });
                //Check all button inside table
                $("#requirementnote-table-check-all").on("click", function (e) {
                    //Toggler
                    if ($("tr td div input.requirementnote-table-checkbox-for-row").is(":checked")) {
                        $("tr td div input.requirementnote-table-checkbox-for-row").removeAttr("checked");
                    }
                    else {
                        $("tr td div input.requirementnote-table-checkbox-for-row").attr("checked", "checked");
                    }
                });
                //Buttons inside head of table
                $("tr th button").one("click", function (e) {
                    //Toggler
                    if (SorterColumn == $(this).attr("value")) {
                        SorterColumn = "";
                        SortToggler = true;
                    }
                    else {
                        SorterColumn = $(this).attr("value");
                        SortToggler = false;
                    }
                    ValidateAndSearch();
                });
                //Delete button in table and list
                $("div.dropdown-menu button.requirement-requirementnote-table-delete-button, div.dropdown-menu button.requirement-requirementnote-list-delete-button").on("click", function (e) {
                    var RequirementNoteId = $(this).val();
                    RequirementNote_TsModel_1.RequirementNoteModel.DeleteByRequirementNoteId(RequirementNoteId).subscribe({
                        next: function (newrow) {
                        },
                        complete: function () {
                            //SUCCESS
                            // @ts-ignore
                            $.notify({ icon: "fas fa-check", message: "Row deleted successfully" }, { type: "success", placement: { from: "bottom", align: "center" } });
                            ValidateAndSearch();
                        },
                        error: function (err) {
                            //ERROR
                            // @ts-ignore
                            $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to delete data" }, { type: "danger", placement: { from: "bottom", align: "center" } });
                            console.log(err);
                        }
                    });
                });
                //Copy button in table and list
                $("div.dropdown-menu button.requirement-requirementnote-table-copy-button, div.dropdown-menu button.requirement-requirementnote-list-copy-button").on("click", function (e) {
                    var RequirementNoteId = $(this).val();
                    RequirementNote_TsModel_1.RequirementNoteModel.CopyByRequirementNoteId(RequirementNoteId).subscribe({
                        next: function (newrow) {
                        },
                        complete: function () {
                            //SUCCESS
                            // @ts-ignore
                            $.notify({ icon: "fas fa-check", message: "Row copied successfully" }, { type: "success", placement: { from: "bottom", align: "center" } });
                            ValidateAndSearch();
                        },
                        error: function (err) {
                            //ERROR
                            // @ts-ignore
                            $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to copy data" }, { type: "danger", placement: { from: "bottom", align: "center" } });
                            console.log(err);
                        }
                    });
                });
            },
            error: function (err) {
                //ERROR
                // @ts-ignore
                $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to get data" }, { type: "danger", placement: { from: "bottom", align: "center" } });
                console.log(err);
            }
        });
    };
    return RequirementNoteQuery;
}());
function ValidateAndSearch() {
    var _requirementnoteSelectAllPaged = {
        QueryString: QueryString,
        ActualPageNumber: ActualPageNumber,
        RowsPerPage: RowsPerPage,
        SorterColumn: SorterColumn,
        SortToggler: SortToggler,
        TotalRows: TotalRows,
        TotalPages: TotalPages
    };
    RequirementNoteQuery.SelectAllPagedToHTML(_requirementnoteSelectAllPaged);
}
//LOAD EVENT
if ($("#requirement-requirement-title-page").html().includes("Edit requirement")) {
    //Set to default values
    QueryString = "";
    ActualPageNumber = 1;
    RowsPerPage = 50;
    SorterColumn = "RequirementNoteId";
    SortToggler = false;
    TotalRows = 0;
    TotalPages = 0;
    ViewToggler = "List";
    //Disable first and previous links in pagination
    $("#requirement-requirementnote-lnk-first-page-lg, #requirement-requirementnote-lnk-first-page").attr("disabled", "disabled");
    $("#requirement-requirementnote-lnk-previous-page-lg, #requirement-requirementnote-lnk-previous-page").attr("disabled", "disabled");
    //Hide messages
    $("#requirement-requirementnote-export-message").html("");
    ValidateAndSearch();
}
//CLICK, SCROLL AND KEYBOARD EVENTS
//Search button
$($("#requirement-requirementnote-search-button")).on("click", function () {
    ValidateAndSearch();
});
//Query string
$("#requirement-requirementnote-query-string").on("change keyup input", function (e) {
    var _a, _b;
    //If undefined, set QueryString to "" value
    QueryString = (_b = ((_a = $(this).val()) === null || _a === void 0 ? void 0 : _a.toString())) !== null && _b !== void 0 ? _b : "";
    ValidateAndSearch();
});
//First page link in pagination
$("#requirement-requirementnote-lnk-first-page-lg, #requirement-requirementnote-lnk-first-page").on("click", function (e) {
    ActualPageNumber = 1;
    ValidateAndSearch();
});
//Previous page link in pagination
$("#requirement-requirementnote-lnk-previous-page-lg, #requirement-requirementnote-lnk-previous-page").on("click", function (e) {
    ActualPageNumber -= 1;
    ValidateAndSearch();
});
//Next page link in pagination
$("#requirement-requirementnote-lnk-next-page-lg, #requirement-requirementnote-lnk-next-page").on("click", function (e) {
    ActualPageNumber += 1;
    ValidateAndSearch();
});
//Last page link in pagination
$("#requirement-requirementnote-lnk-last-page-lg, #requirement-requirementnote-lnk-last-page").on("click", function (e) {
    ActualPageNumber = TotalPages;
    ValidateAndSearch();
});
//Table view button
$("#requirement-requirementnote-table-view-button").on("click", function (e) {
    $("#requirement-requirementnote-view-toggler").val("Table");
    ViewToggler = "Table";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear table view
    $("#requirement-requirementnote-body-and-head-table").html("");
    ValidateAndSearch();
});
//List view button
$("#requirement-requirementnote-list-view-button").on("click", function (e) {
    $("#requirement-requirementnote-view-toggler").val("List");
    ViewToggler = "List";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear list view
    $("#requirement-requirementnote-body-list").html("");
    ValidateAndSearch();
});
//Used to list view
function ScrollDownNSearch() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var WindowsTopDistance = (_a = $(window).scrollTop()) !== null && _a !== void 0 ? _a : 0;
    var WindowsBottomDistance = ((_b = $(window).scrollTop()) !== null && _b !== void 0 ? _b : 0) + ((_c = $(window).innerHeight()) !== null && _c !== void 0 ? _c : 0);
    var CardsFooterTopPosition = (_e = (_d = $("#requirement-requirementnote-search-more-button-in-list").offset()) === null || _d === void 0 ? void 0 : _d.top) !== null && _e !== void 0 ? _e : 0;
    var CardsFooterBottomPosition = ((_g = (_f = $("#requirement-requirementnote-search-more-button-in-list").offset()) === null || _f === void 0 ? void 0 : _f.top) !== null && _g !== void 0 ? _g : 0) + ((_h = $("#requirement-requirementnote-search-more-button-in-list").outerHeight()) !== null && _h !== void 0 ? _h : 0);
    if (WindowsTopDistance > LastTopDistance) {
        //Scroll down
        if ((WindowsBottomDistance > CardsFooterTopPosition) && (WindowsTopDistance < CardsFooterBottomPosition)) {
            //Search More button visible
            if (ActualPageNumber !== TotalPages) {
                ScrollDownNSearchFlag = true;
                ActualPageNumber += 1;
                ValidateAndSearch();
            }
        }
        else { /*Card footer not visible*/ }
    }
    else { /*Scroll up*/ }
    LastTopDistance = WindowsTopDistance;
}
//Used to list view
$(window).on("scroll", ScrollDownNSearch);
//# sourceMappingURL=RequirementNoteQuery_jQuery.js.map