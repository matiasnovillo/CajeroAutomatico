"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Import libraries to use
var RequirementChangehistory_TsModel_1 = require("../../RequirementChangehistory/TsModels/RequirementChangehistory_TsModel");
var $ = require("jquery");
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
//Last modification on: 25/12/2022 18:01:44
//Set default values
var requirementchangehistoryLastTopDistance = 0;
var requirementchangehistoryQueryString = "";
var requirementchangehistoryActualPageNumber = 1;
var requirementchangehistoryRowsPerPage = 50;
var requirementchangehistorySorterColumn = "";
var requirementchangehistorySortToggler = false;
var requirementchangehistoryTotalPages = 0;
var requirementchangehistoryTotalRows = 0;
var requirementchangehistoryViewToggler = "List";
var requirementchangehistoryScrollDownNSearchFlag = false;
var RequirementChangehistoryQuery = /** @class */ (function () {
    function RequirementChangehistoryQuery() {
    }
    RequirementChangehistoryQuery.SelectAllPagedToHTML = function (request_requirementchangehistorySelectAllPaged) {
        //Used for list view
        $(window).off("scroll");
        //Load some part of table
        var TableContent = "<thead class=\"thead-light\">\n    <tr>\n        <th scope=\"col\">\n            <div>\n                <input id=\"requirementchangehistory-table-check-all\" type=\"checkbox\">\n            </div>\n        </th>\n        <th scope=\"col\">\n            <button value=\"RequirementChangehistoryId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Change history ID\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Active\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Active\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"DateTimeCreation\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Date Time Creation\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"DateTimeLastModification\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Date Time Last Modification\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"UserCreationId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                User Creation\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"UserLastModificationId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                User Last Modification\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"RequirementId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Requirement ID\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"RequirementStateId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                State\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"RequirementPriorityId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Priority\n            </button>\n        </th>\n        \n        <th scope=\"col\"></th>\n    </tr>\n</thead>\n<tbody>";
        var ListContent = "";
        RequirementChangehistory_TsModel_1.RequirementChangehistoryModel.SelectAllPaged(request_requirementchangehistorySelectAllPaged, $("#requirement-requirement-requirementid-input").val()).subscribe({
            next: function (newrow) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                //Only works when there is data available
                if (newrow.status != 204) {
                    var response_requirementchangehistoryQuery = newrow.response;
                    //Set to default values if they are null
                    requirementchangehistoryQueryString = (_a = response_requirementchangehistoryQuery.requirementchangehistoryQueryString) !== null && _a !== void 0 ? _a : "";
                    requirementchangehistoryActualPageNumber = (_b = response_requirementchangehistoryQuery.requirementchangehistoryActualPageNumber) !== null && _b !== void 0 ? _b : 0;
                    requirementchangehistoryRowsPerPage = (_c = response_requirementchangehistoryQuery.requirementchangehistoryRowsPerPage) !== null && _c !== void 0 ? _c : 0;
                    requirementchangehistorySorterColumn = (_d = response_requirementchangehistoryQuery.requirementchangehistorySorterColumn) !== null && _d !== void 0 ? _d : "";
                    requirementchangehistorySortToggler = (_e = response_requirementchangehistoryQuery.requirementchangehistorySortToggler) !== null && _e !== void 0 ? _e : false;
                    requirementchangehistoryTotalRows = (_f = response_requirementchangehistoryQuery.requirementchangehistoryTotalRows) !== null && _f !== void 0 ? _f : 0;
                    requirementchangehistoryTotalPages = (_g = response_requirementchangehistoryQuery.requirementchangehistoryTotalPages) !== null && _g !== void 0 ? _g : 0;
                    //Query string
                    $("#requirement-requirementchangehistory-query-string").attr("placeholder", "Search... (".concat(requirementchangehistoryTotalRows, " records)"));
                    //Total pages of pagination
                    $("#requirement-requirementchangehistory-total-pages-lg, #requirement-requirementchangehistory-total-pages").html(requirementchangehistoryTotalPages.toString());
                    //Actual page number of pagination
                    $("#requirement-requirementchangehistory-actual-page-number-lg, #requirement-requirementchangehistory-actual-page-number").html(requirementchangehistoryActualPageNumber.toString());
                    //If we are at the final of book disable next and last buttons in pagination
                    if (requirementchangehistoryActualPageNumber === requirementchangehistoryTotalPages) {
                        $("#requirement-requirementchangehistory-lnk-next-page-lg, #requirement-requirementchangehistory-lnk-next-page").attr("disabled", "disabled");
                        $("#requirement-requirementchangehistory-lnk-last-page-lg, #requirement-requirementchangehistory-lnk-last-page").attr("disabled", "disabled");
                        $("#requirement-requirementchangehistory-search-more-button-in-list").html("");
                    }
                    else {
                        $("#requirement-requirementchangehistory-lnk-next-page-lg, #requirement-requirementchangehistory-lnk-next-page").removeAttr("disabled");
                        $("#requirement-requirementchangehistory-lnk-last-page-lg, #requirement-requirementchangehistory-lnk-last-page").removeAttr("disabled");
                        //Scroll arrow for list view
                        $("#requirement-requirementchangehistory-search-more-button-in-list").html("<i class='fas fa-2x fa-chevron-down'></i>");
                    }
                    //If we are at the begining of the book disable previous and first buttons in pagination
                    if (requirementchangehistoryActualPageNumber === 1) {
                        $("#requirement-requirementchangehistory-lnk-previous-page-lg, #requirement-requirementchangehistory-lnk-previous-page").attr("disabled", "disabled");
                        $("#requirement-requirementchangehistory-lnk-first-page-lg, #requirement-requirementchangehistory-lnk-first-page").attr("disabled", "disabled");
                    }
                    else {
                        $("#requirement-requirementchangehistory-lnk-previous-page-lg, #requirement-requirementchangehistory-lnk-previous-page").removeAttr("disabled");
                        $("#requirement-requirementchangehistory-lnk-first-page-lg, #requirement-requirementchangehistory-lnk-first-page").removeAttr("disabled");
                    }
                    //If book is empty set to default pagination values
                    if (((_h = response_requirementchangehistoryQuery === null || response_requirementchangehistoryQuery === void 0 ? void 0 : response_requirementchangehistoryQuery.lstRequirementChangehistoryModel) === null || _h === void 0 ? void 0 : _h.length) === 0) {
                        $("#requirement-requirementchangehistory-lnk-previous-page-lg, #requirement-requirementchangehistory-lnk-previous-page").attr("disabled", "disabled");
                        $("#requirement-requirementchangehistory-lnk-first-page-lg, #requirement-requirementchangehistory-lnk-first-page").attr("disabled", "disabled");
                        $("#requirement-requirementchangehistory-lnk-next-page-lg, #requirement-requirementchangehistory-lnk-next-page").attr("disabled", "disabled");
                        $("#requirement-requirementchangehistory-lnk-last-page-lg, #requirement-requirementchangehistory-lnk-last-page").attr("disabled", "disabled");
                        $("#requirement-requirementchangehistory-total-pages-lg, #requirement-requirementchangehistory-total-pages").html("1");
                        $("#requirement-requirementchangehistory-actual-page-number-lg, #requirement-requirementchangehistory-actual-page-number").html("1");
                    }
                    //Read data book
                    (_j = response_requirementchangehistoryQuery === null || response_requirementchangehistoryQuery === void 0 ? void 0 : response_requirementchangehistoryQuery.lstRequirementChangehistoryModel) === null || _j === void 0 ? void 0 : _j.forEach(function (row) {
                        TableContent += "<tr>\n    <!-- Checkbox -->\n    <td>\n        <div>\n            <input class=\"requirementchangehistory-table-checkbox-for-row\" value=\"".concat(row.RequirementChangehistoryId, "\" type=\"checkbox\">\n        </div>\n    </td>\n    <!-- Data -->\n    <td class=\"text-left text-light\">\n        <i class=\"fas fa-key\"></i> ").concat(row.RequirementChangehistoryId, "\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-toggle-on\"></i> ").concat(row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>", "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-calendar\"></i> ").concat(row.DateTimeCreation, "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-calendar\"></i> ").concat(row.DateTimeLastModification, "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-key\"></i> ").concat(row.UserCreationIdFantasyName, "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-key\"></i> ").concat(row.UserLastModificationIdFantasyName, "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-key\"></i> ").concat(row.RequirementId, "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-key\"></i> ").concat(row.RequirementStateIdName, "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-key\"></i> ").concat(row.RequirementPriorityIdName, "\n        </strong>\n    </td>\n</tr>");
                        ListContent += "<div class=\"row mx-2\">\n    <div class=\"col-sm\">\n        <div class=\"card bg-gradient-primary mb-2\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col text-truncate\">\n                        <span class=\"text-white text-light mb-4\">\n                           Change history ID <i class=\"fas fa-key\"></i> ".concat(row.RequirementChangehistoryId, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Active <i class=\"fas fa-toggle-on\"></i> ").concat(row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>", "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Date Time Creation <i class=\"fas fa-calendar\"></i> ").concat(row.DateTimeCreation, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Date Time Last Modification <i class=\"fas fa-calendar\"></i> ").concat(row.DateTimeLastModification, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           User Creation <i class=\"fas fa-key\"></i> ").concat(row.UserCreationIdFantasyName, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           User Last Modification <i class=\"fas fa-key\"></i> ").concat(row.UserLastModificationIdFantasyName, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Requirement ID <i class=\"fas fa-key\"></i> ").concat(row.RequirementId, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           State <i class=\"fas fa-key\"></i> ").concat(row.RequirementStateIdName, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Priority <i class=\"fas fa-key\"></i> ").concat(row.RequirementPriorityIdName, "\n                        </span>\n                        <br/>\n                        \n                    </div>\n                    <div class=\"col-auto\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
                    });
                    //If view table is activated, clear table view, if not, clear list view
                    if (requirementchangehistoryViewToggler === "Table") {
                        $("#requirement-requirementchangehistory-body-and-head-table").html("");
                        $("#requirement-requirementchangehistory-body-and-head-table").html(TableContent);
                    }
                    else {
                        //Used for list view
                        if (requirementchangehistoryScrollDownNSearchFlag) {
                            $("#requirement-requirementchangehistory-body-list").append(ListContent);
                            requirementchangehistoryScrollDownNSearchFlag = false;
                        }
                        else {
                            //Clear list view
                            $("#requirement-requirementchangehistory-body-list").html("");
                            $("#requirement-requirementchangehistory-body-list").html(ListContent);
                        }
                    }
                }
                else {
                    //Show error message
                    $("#requirement-requirementchangehistory-error-message-title").html("No registers found");
                    $("#requirement-requirementchangehistory-error-message-text").html("The server did not found any register. HTTP code 204");
                    $("#requirement-requirementchangehistory-button-error-message-in-card").show();
                }
            },
            complete: function () {
                //Execute ScrollDownNSearch function when the user scroll the page
                $(window).on("scroll", requirementchangehistoryScrollDownNSearch);
                //Add final content to TableContent
                TableContent += "</tbody>\n                                </table>";
                //Check button inside list view
                $(".requirement-requirementchangehistory-checkbox-list").on("click", function (e) {
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
                $("#requirementchangehistory-table-check-all").on("click", function (e) {
                    //Toggler
                    if ($("tr td div input.requirementchangehistory-table-checkbox-for-row").is(":checked")) {
                        $("tr td div input.requirementchangehistory-table-checkbox-for-row").removeAttr("checked");
                    }
                    else {
                        $("tr td div input.requirementchangehistory-table-checkbox-for-row").attr("checked", "checked");
                    }
                });
                //Buttons inside head of table
                $("tr th button").one("click", function (e) {
                    //Toggler
                    if (requirementchangehistorySorterColumn == $(this).attr("value")) {
                        requirementchangehistorySorterColumn = "";
                        requirementchangehistorySortToggler = true;
                    }
                    else {
                        requirementchangehistorySorterColumn = $(this).attr("value");
                        requirementchangehistorySortToggler = false;
                    }
                    requirementchangehistoryValidateAndSearch();
                });
                //Hide error message
                $("#requirement-requirementchangehistory-error-message-title").html("");
                $("#requirement-requirementchangehistory-error-message-text").html("");
                $("#requirement-requirementchangehistory-button-error-message-in-card").hide();
                //Delete button in table and list
                $("div.dropdown-menu button.requirement-requirementchangehistory-table-delete-button, div.dropdown-menu button.requirement-requirementchangehistory-list-delete-button").on("click", function (e) {
                    var RequirementChangehistoryId = $(this).val();
                    RequirementChangehistory_TsModel_1.RequirementChangehistoryModel.DeleteByRequirementChangehistoryId(RequirementChangehistoryId).subscribe({
                        next: function (newrow) {
                        },
                        complete: function () {
                            requirementchangehistoryValidateAndSearch();
                            //Show OK message
                            $("#requirement-requirementchangehistory-button-error-message-in-card").hide();
                            $("#requirement-requirementchangehistory-button-ok-message-in-card").html("<strong>\n                                                                    <i class=\"fas fa-check\"></i>\n                                                                </strong> Row deleted successfully");
                            $("#requirement-requirementchangehistory-button-ok-message-in-card").show();
                        },
                        error: function (err) {
                            //Related to error message
                            $("#requirement-requirementchangehistory-error-message-title").html("RequirementChangehistoryModel.DeleteByRequirementChangehistoryId(RequirementChangehistoryId).subscribe(...)");
                            $("#requirement-requirementchangehistory-error-message-text").html(err);
                            $("#requirement-requirementchangehistory-button-error-message-in-card").show();
                        }
                    });
                });
                //Copy button in table and list
                $("div.dropdown-menu button.requirement-requirementchangehistory-table-copy-button, div.dropdown-menu button.requirement-requirementchangehistory-list-copy-button").on("click", function (e) {
                    var RequirementChangehistoryId = $(this).val();
                    RequirementChangehistory_TsModel_1.RequirementChangehistoryModel.CopyByRequirementChangehistoryId(RequirementChangehistoryId).subscribe({
                        next: function (newrow) {
                        },
                        complete: function () {
                            requirementchangehistoryValidateAndSearch();
                            //Show OK message
                            $("#requirement-requirementchangehistory-button-error-message-in-card").hide();
                            $("#requirement-requirementchangehistory-button-ok-message-in-card").html("<strong>\n                                                                    <i class=\"fas fa-check\"></i>\n                                                                </strong> Row copied successfully");
                            $("#requirement-requirementchangehistory-button-ok-message-in-card").show();
                        },
                        error: function (err) {
                            //Show error message
                            $("#requirement-requirementchangehistory-error-message-title").html("RequirementChangehistoryModel.CopyByRequirementChangehistoryId(RequirementChangehistoryId).subscribe(...)");
                            $("#requirement-requirementchangehistory-error-message-text").html(err);
                            $("#requirement-requirementchangehistory-button-error-message-in-card").show();
                        }
                    });
                });
            },
            error: function (err) {
                //Show error message
                $("#requirement-requirementchangehistory-error-message-title").html("RequirementChangehistoryModel.SelectAllPaged(request_requirementchangehistorymodelQ).subscribe(...)");
                $("#requirement-requirementchangehistory-error-message-text").html(err);
                $("#requirement-requirementchangehistory-button-error-message-in-card").show();
            }
        });
    };
    return RequirementChangehistoryQuery;
}());
function requirementchangehistoryValidateAndSearch() {
    //Hide error and OK message button
    $("#requirement-requirementchangehistory-button-error-message-in-card").hide();
    $("#requirement-requirementchangehistory-button-ok-message-in-card").hide();
    var _requirementchangehistorySelectAllPaged = {
        requirementchangehistoryQueryString: requirementchangehistoryQueryString,
        requirementchangehistoryActualPageNumber: requirementchangehistoryActualPageNumber,
        requirementchangehistoryRowsPerPage: requirementchangehistoryRowsPerPage,
        requirementchangehistorySorterColumn: requirementchangehistorySorterColumn,
        requirementchangehistorySortToggler: requirementchangehistorySortToggler,
        requirementchangehistoryTotalRows: requirementchangehistoryTotalRows,
        requirementchangehistoryTotalPages: requirementchangehistoryTotalPages
    };
    RequirementChangehistoryQuery.SelectAllPagedToHTML(_requirementchangehistorySelectAllPaged);
}
//LOAD EVENT
if ($("#requirement-requirement-title-page").html().includes("Edit requirement")) {
    //Set to default values
    requirementchangehistoryQueryString = "";
    requirementchangehistoryActualPageNumber = 1;
    requirementchangehistoryRowsPerPage = 50;
    requirementchangehistorySorterColumn = "RequirementChangehistoryId";
    requirementchangehistorySortToggler = false;
    requirementchangehistoryTotalRows = 0;
    requirementchangehistoryTotalPages = 0;
    requirementchangehistoryViewToggler = "List";
    //Disable first and previous links in pagination
    $("#requirement-requirementchangehistory-lnk-first-page-lg, #requirement-requirementchangehistory-lnk-first-page").attr("disabled", "disabled");
    $("#requirement-requirementchangehistory-lnk-previous-page-lg, #requirement-requirementchangehistory-lnk-previous-page").attr("disabled", "disabled");
    //Hide messages
    $("#requirement-requirementchangehistory-export-message").html("");
    $("#requirement-requirementchangehistory-button-error-message-in-card").hide();
    $("#requirement-requirementchangehistory-button-ok-message-in-card").hide();
    requirementchangehistoryValidateAndSearch();
}
//CLICK, SCROLL AND KEYBOARD EVENTS
//Search button
$($("#requirement-requirementchangehistory-search-button")).on("click", function () {
    requirementchangehistoryValidateAndSearch();
});
//Query string
$("#requirement-requirementchangehistory-query-string").on("change keyup input", function (e) {
    var _a, _b;
    //If undefined, set QueryString to "" value
    requirementchangehistoryQueryString = (_b = ((_a = $(this).val()) === null || _a === void 0 ? void 0 : _a.toString())) !== null && _b !== void 0 ? _b : "";
    requirementchangehistoryValidateAndSearch();
});
//First page link in pagination
$("#requirement-requirementchangehistory-lnk-first-page-lg, #requirement-requirementchangehistory-lnk-first-page").on("click", function (e) {
    requirementchangehistoryActualPageNumber = 1;
    requirementchangehistoryValidateAndSearch();
});
//Previous page link in pagination
$("#requirement-requirementchangehistory-lnk-previous-page-lg, #requirement-requirementchangehistory-lnk-previous-page").on("click", function (e) {
    requirementchangehistoryActualPageNumber -= 1;
    requirementchangehistoryValidateAndSearch();
});
//Next page link in pagination
$("#requirement-requirementchangehistory-lnk-next-page-lg, #requirement-requirementchangehistory-lnk-next-page").on("click", function (e) {
    requirementchangehistoryActualPageNumber += 1;
    requirementchangehistoryValidateAndSearch();
});
//Last page link in pagination
$("#requirement-requirementchangehistory-lnk-last-page-lg, #requirement-requirementchangehistory-lnk-last-page").on("click", function (e) {
    requirementchangehistoryActualPageNumber = requirementchangehistoryTotalPages;
    requirementchangehistoryValidateAndSearch();
});
//Table view button
$("#requirement-requirementchangehistory-table-view-button").on("click", function (e) {
    $("#requirement-requirementchangehistory-view-toggler").val("Table");
    requirementchangehistoryViewToggler = "Table";
    //Reset some values to default
    requirementchangehistoryActualPageNumber = 1;
    //Clear table view
    $("#requirement-requirementchangehistory-body-and-head-table").html("");
    requirementchangehistoryValidateAndSearch();
});
//List view button
$("#requirement-requirementchangehistory-list-view-button").on("click", function (e) {
    $("#requirement-requirementchangehistory-view-toggler").val("List");
    requirementchangehistoryViewToggler = "List";
    //Reset some values to default
    requirementchangehistoryActualPageNumber = 1;
    //Clear list view
    $("#requirement-requirementchangehistory-body-list").html("");
    requirementchangehistoryValidateAndSearch();
});
//Used to list view
function requirementchangehistoryScrollDownNSearch() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var WindowsTopDistance = (_a = $(window).scrollTop()) !== null && _a !== void 0 ? _a : 0;
    var WindowsBottomDistance = ((_b = $(window).scrollTop()) !== null && _b !== void 0 ? _b : 0) + ((_c = $(window).innerHeight()) !== null && _c !== void 0 ? _c : 0);
    var CardsFooterTopPosition = (_e = (_d = $("#requirement-requirementchangehistory-search-more-button-in-list").offset()) === null || _d === void 0 ? void 0 : _d.top) !== null && _e !== void 0 ? _e : 0;
    var CardsFooterBottomPosition = ((_g = (_f = $("#requirement-requirementchangehistory-search-more-button-in-list").offset()) === null || _f === void 0 ? void 0 : _f.top) !== null && _g !== void 0 ? _g : 0) + ((_h = $("#requirement-requirementchangehistory-search-more-button-in-list").outerHeight()) !== null && _h !== void 0 ? _h : 0);
    if (WindowsTopDistance > requirementchangehistoryLastTopDistance) {
        //Scroll down
        if ((WindowsBottomDistance > CardsFooterTopPosition) && (WindowsTopDistance < CardsFooterBottomPosition)) {
            //Search More button visible
            if (requirementchangehistoryActualPageNumber !== requirementchangehistoryTotalPages) {
                requirementchangehistoryScrollDownNSearchFlag = true;
                requirementchangehistoryActualPageNumber += 1;
                requirementchangehistoryValidateAndSearch();
            }
        }
        else { /*Card footer not visible*/ }
    }
    else { /*Scroll up*/ }
    requirementchangehistoryLastTopDistance = WindowsTopDistance;
}
//Used to list view
$(window).on("scroll", requirementchangehistoryScrollDownNSearch);
//# sourceMappingURL=RequirementChangehistoryQuery_jQuery.js.map