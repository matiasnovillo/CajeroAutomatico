"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Import libraries to use
var RequirementFile_TsModel_1 = require("../../RequirementFile/TsModels/RequirementFile_TsModel");
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
//Last modification on: 29/12/2022 10:16:50
//Set default values
var requirementfileLastTopDistance = 0;
var requirementfileQueryString = "";
var requirementfileActualPageNumber = 1;
var requirementfileRowsPerPage = 50;
var requirementfileSorterColumn = "";
var requirementfileSortToggler = false;
var requirementfileTotalPages = 0;
var requirementfileTotalRows = 0;
var requirementfileViewToggler = "List";
var requirementfileScrollDownNSearchFlag = false;
var RequirementFileQuery = /** @class */ (function () {
    function RequirementFileQuery() {
    }
    RequirementFileQuery.SelectAllPagedToHTML = function (request_requirementfileSelectAllPaged) {
        //Used for list view
        $(window).off("scroll");
        //Load some part of table
        var TableContent = "<thead class=\"thead-light\">\n    <tr>\n        <th scope=\"col\">\n            <div>\n                <input id=\"requirementfile-table-check-all\" type=\"checkbox\">\n            </div>\n        </th>\n        <th scope=\"col\">\n            <button value=\"RequirementFileId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                File ID\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"Active\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Active\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"DateTimeCreation\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Date Time Creation\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"DateTimeLastModification\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Date Time Last Modification\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"UserCreationId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                User Creation\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"UserLastModificationId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                User Last Modification\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"RequirementId\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                Requirement ID\n            </button>\n        </th>\n        <th scope=\"col\">\n            <button value=\"FilePath\" class=\"btn btn-outline-secondary btn-sm\" type=\"button\">\n                File Path\n            </button>\n        </th>\n        \n        <th scope=\"col\"></th>\n    </tr>\n</thead>\n<tbody>";
        var ListContent = "";
        RequirementFile_TsModel_1.RequirementFileModel.SelectAllPaged(request_requirementfileSelectAllPaged, $("#requirement-requirement-requirementid-input").val()).subscribe({
            next: function (newrow) {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j;
                //Only works when there is data available
                if (newrow.status != 204) {
                    var response_requirementfileQuery = newrow.response;
                    //Set to default values if they are null
                    requirementfileQueryString = (_a = response_requirementfileQuery.requirementfileQueryString) !== null && _a !== void 0 ? _a : "";
                    requirementfileActualPageNumber = (_b = response_requirementfileQuery.requirementfileActualPageNumber) !== null && _b !== void 0 ? _b : 0;
                    requirementfileRowsPerPage = (_c = response_requirementfileQuery.requirementfileRowsPerPage) !== null && _c !== void 0 ? _c : 0;
                    requirementfileSorterColumn = (_d = response_requirementfileQuery.requirementfileSorterColumn) !== null && _d !== void 0 ? _d : "";
                    requirementfileSortToggler = (_e = response_requirementfileQuery.requirementfileSortToggler) !== null && _e !== void 0 ? _e : false;
                    requirementfileTotalRows = (_f = response_requirementfileQuery.requirementfileTotalRows) !== null && _f !== void 0 ? _f : 0;
                    requirementfileTotalPages = (_g = response_requirementfileQuery.requirementfileTotalPages) !== null && _g !== void 0 ? _g : 0;
                    //Query string
                    $("#requirement-requirementfile-query-string").attr("placeholder", "Search... (".concat(requirementfileTotalRows, " records)"));
                    //Total pages of pagination
                    $("#requirement-requirementfile-total-pages-lg, #requirement-requirementfile-total-pages").html(requirementfileTotalPages.toString());
                    //Actual page number of pagination
                    $("#requirement-requirementfile-actual-page-number-lg, #requirement-requirementfile-actual-page-number").html(requirementfileActualPageNumber.toString());
                    //If we are at the final of book disable next and last buttons in pagination
                    if (requirementfileActualPageNumber === requirementfileTotalPages) {
                        $("#requirement-requirementfile-lnk-next-page-lg, #requirement-requirementfile-lnk-next-page").attr("disabled", "disabled");
                        $("#requirement-requirementfile-lnk-last-page-lg, #requirement-requirementfile-lnk-last-page").attr("disabled", "disabled");
                        $("#requirement-requirementfile-search-more-button-in-list").html("");
                    }
                    else {
                        $("#requirement-requirementfile-lnk-next-page-lg, #requirement-requirementfile-lnk-next-page").removeAttr("disabled");
                        $("#requirement-requirementfile-lnk-last-page-lg, #requirement-requirementfile-lnk-last-page").removeAttr("disabled");
                        //Scroll arrow for list view
                        $("#requirement-requirementfile-search-more-button-in-list").html("<i class='fas fa-2x fa-chevron-down'></i>");
                    }
                    //If we are at the begining of the book disable previous and first buttons in pagination
                    if (requirementfileActualPageNumber === 1) {
                        $("#requirement-requirementfile-lnk-previous-page-lg, #requirement-requirementfile-lnk-previous-page").attr("disabled", "disabled");
                        $("#requirement-requirementfile-lnk-first-page-lg, #requirement-requirementfile-lnk-first-page").attr("disabled", "disabled");
                    }
                    else {
                        $("#requirement-requirementfile-lnk-previous-page-lg, #requirement-requirementfile-lnk-previous-page").removeAttr("disabled");
                        $("#requirement-requirementfile-lnk-first-page-lg, #requirement-requirementfile-lnk-first-page").removeAttr("disabled");
                    }
                    //If book is empty set to default pagination values
                    if (((_h = response_requirementfileQuery === null || response_requirementfileQuery === void 0 ? void 0 : response_requirementfileQuery.lstRequirementFileModel) === null || _h === void 0 ? void 0 : _h.length) === 0) {
                        $("#requirement-requirementfile-lnk-previous-page-lg, #requirement-requirementfile-lnk-previous-page").attr("disabled", "disabled");
                        $("#requirement-requirementfile-lnk-first-page-lg, #requirement-requirementfile-lnk-first-page").attr("disabled", "disabled");
                        $("#requirement-requirementfile-lnk-next-page-lg, #requirement-requirementfile-lnk-next-page").attr("disabled", "disabled");
                        $("#requirement-requirementfile-lnk-last-page-lg, #requirement-requirementfile-lnk-last-page").attr("disabled", "disabled");
                        $("#requirement-requirementfile-total-pages-lg, #requirement-requirementfile-total-pages").html("1");
                        $("#requirement-requirementfile-actual-page-number-lg, #requirement-requirementfile-actual-page-number").html("1");
                    }
                    //Read data book
                    (_j = response_requirementfileQuery === null || response_requirementfileQuery === void 0 ? void 0 : response_requirementfileQuery.lstRequirementFileModel) === null || _j === void 0 ? void 0 : _j.forEach(function (row) {
                        TableContent += "<tr>\n    <!-- Checkbox -->\n    <td>\n        <div>\n            <input class=\"requirementfile-table-checkbox-for-row\" value=\"".concat(row.RequirementFileId, "\" type=\"checkbox\">\n        </div>\n    </td>\n    <!-- Data -->\n    <td class=\"text-left text-light\">\n        <i class=\"fas fa-key\"></i> ").concat(row.RequirementFileId, "\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-toggle-on\"></i> ").concat(row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>", "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-calendar\"></i> ").concat(row.DateTimeCreation, "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-calendar\"></i> ").concat(row.DateTimeLastModification, "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-key\"></i> ").concat(row.UserCreationIdFantasyName, "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-key\"></i> ").concat(row.UserLastModificationIdFantasyName, "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <strong>\n            <i class=\"fas fa-key\"></i> ").concat(row.RequirementId, "\n        </strong>\n    </td>\n    <td class=\"text-left\">\n        <a href=\"").concat(row.FilePath, "\" download>\n            <strong>\n                <i class=\"fas fa-file\"></i> ").concat(row.FilePath, "\n            </strong>\n        </a>\n    </td>\n    \n    <!-- Actions -->\n    <td class=\"text-right\">\n        <div class=\"dropdown\">\n            <button class=\"btn btn-icon-only text-danger\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-trash\"></i>\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                <button class=\"dropdown-item text-danger requirement-requirementfile-table-delete-button\" value=\"").concat(row.RequirementFileId, "\" type=\"button\">\n                    <i class=\"fas fa-exclamation-triangle\"></i> Yes, delete\n                </button>\n            </div>\n        </div>\n    </td>\n</tr>");
                        ListContent += "<div class=\"row mx-2\">\n    <div class=\"col-sm\">\n        <div class=\"card bg-gradient-primary mb-2\">\n            <div class=\"card-body\">\n                <div class=\"row\">\n                    <div class=\"col text-truncate\">\n                        <span class=\"text-white text-light mb-4\">\n                           File ID <i class=\"fas fa-key\"></i> ".concat(row.RequirementFileId, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Active <i class=\"fas fa-toggle-on\"></i> ").concat(row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>", "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Date Time Creation <i class=\"fas fa-calendar\"></i> ").concat(row.DateTimeCreation, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Date Time Last Modification <i class=\"fas fa-calendar\"></i> ").concat(row.DateTimeLastModification, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           User Creation <i class=\"fas fa-key\"></i> ").concat(row.UserCreationIdFantasyName, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           User Last Modification <i class=\"fas fa-key\"></i> ").concat(row.UserLastModificationIdFantasyName, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                           Requirement ID <i class=\"fas fa-key\"></i> ").concat(row.RequirementId, "\n                        </span>\n                        <br/>\n                        <span class=\"text-white mb-4\">\n                            <a href=\"").concat(row.FilePath, "\" download class=\"text-white\">\n                           File Path <i class=\"fas fa-file\"></i> ").concat(row.FilePath, "\n                            </a>\n                        </span>\n                        <br/>\n                        \n                    </div>\n                    <div class=\"col-auto\">\n                    </div>\n                </div>\n                <!-- Actions -->\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"justify-content-end text-right mt-2\">\n                            <div class=\"dropup\">\n                                <a class=\"icon icon-shape bg-white icon-sm text-primary rounded-circle shadow\" href=\"javascript:void(0)\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                    <i class=\"fas fa-ellipsis-v\"></i>\n                                </a>\n                                <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow\">\n                                    <button value=\"").concat(row.RequirementFileId, "\" class=\"dropdown-item text-danger requirement-requirementfile-list-delete-button\" type=\"button\">\n                                        <i class=\"fas fa-trash\"></i>&nbsp;Delete\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
                    });
                    //If view table is activated, clear table view, if not, clear list view
                    if (requirementfileViewToggler === "Table") {
                        $("#requirement-requirementfile-body-and-head-table").html("");
                        $("#requirement-requirementfile-body-and-head-table").html(TableContent);
                    }
                    else {
                        //Used for list view
                        if (requirementfileScrollDownNSearchFlag) {
                            $("#requirement-requirementfile-body-list").append(ListContent);
                            requirementfileScrollDownNSearchFlag = false;
                        }
                        else {
                            //Clear list view
                            $("#requirement-requirementfile-body-list").html("");
                            $("#requirement-requirementfile-body-list").html(ListContent);
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
                $(window).on("scroll", requirementfileScrollDownNSearch);
                //Add final content to TableContent
                TableContent += "</tbody>\n                                </table>";
                //Check button inside list view
                $(".requirement-requirementfile-checkbox-list").on("click", function (e) {
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
                $("#requirementfile-table-check-all").on("click", function (e) {
                    //Toggler
                    if ($("tr td div input.requirementfile-table-checkbox-for-row").is(":checked")) {
                        $("tr td div input.requirementfile-table-checkbox-for-row").removeAttr("checked");
                    }
                    else {
                        $("tr td div input.requirementfile-table-checkbox-for-row").attr("checked", "checked");
                    }
                });
                //Buttons inside head of table
                $("tr th button").one("click", function (e) {
                    //Toggler
                    if (requirementfileSorterColumn == $(this).attr("value")) {
                        requirementfileSorterColumn = "";
                        requirementfileSortToggler = true;
                    }
                    else {
                        requirementfileSorterColumn = $(this).attr("value");
                        requirementfileSortToggler = false;
                    }
                    requirementfileValidateAndSearch();
                });
                //Delete button in table and list
                $("div.dropdown-menu button.requirement-requirementfile-table-delete-button, div.dropdown-menu button.requirement-requirementfile-list-delete-button").on("click", function (e) {
                    var RequirementFileId = $(this).val();
                    RequirementFile_TsModel_1.RequirementFileModel.DeleteByRequirementFileId(RequirementFileId).subscribe({
                        next: function (newrow) {
                        },
                        complete: function () {
                            //SUCCESS
                            // @ts-ignore
                            $.notify({ icon: "fas fa-check", message: "Row deleted successfully" }, { type: "success", placement: { from: "bottom", align: "center" } });
                            requirementfileValidateAndSearch();
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
                $("div.dropdown-menu button.requirement-requirementfile-table-copy-button, div.dropdown-menu button.requirement-requirementfile-list-copy-button").on("click", function (e) {
                    var RequirementFileId = $(this).val();
                    RequirementFile_TsModel_1.RequirementFileModel.CopyByRequirementFileId(RequirementFileId).subscribe({
                        next: function (newrow) {
                        },
                        complete: function () {
                            //SUCCESS
                            // @ts-ignore
                            $.notify({ icon: "fas fa-check", message: "Row copied successfully" }, { type: "success", placement: { from: "bottom", align: "center" } });
                            requirementfileValidateAndSearch();
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
    return RequirementFileQuery;
}());
function requirementfileValidateAndSearch() {
    var _requirementfileSelectAllPaged = {
        requirementfileQueryString: requirementfileQueryString,
        requirementfileActualPageNumber: requirementfileActualPageNumber,
        requirementfileRowsPerPage: requirementfileRowsPerPage,
        requirementfileSorterColumn: requirementfileSorterColumn,
        requirementfileSortToggler: requirementfileSortToggler,
        requirementfileTotalRows: requirementfileTotalRows,
        requirementfileTotalPages: requirementfileTotalPages
    };
    RequirementFileQuery.SelectAllPagedToHTML(_requirementfileSelectAllPaged);
}
//LOAD EVENT
if ($("#requirement-requirement-title-page").html().includes("Edit requirement")) {
    //Set to default values
    requirementfileQueryString = "";
    requirementfileActualPageNumber = 1;
    requirementfileRowsPerPage = 50;
    requirementfileSorterColumn = "RequirementFileId";
    requirementfileSortToggler = false;
    requirementfileTotalRows = 0;
    requirementfileTotalPages = 0;
    requirementfileViewToggler = "List";
    //Disable first and previous links in pagination
    $("#requirement-requirementfile-lnk-first-page-lg, #requirement-requirementfile-lnk-first-page").attr("disabled", "disabled");
    $("#requirement-requirementfile-lnk-previous-page-lg, #requirement-requirementfile-lnk-previous-page").attr("disabled", "disabled");
    //Hide messages
    $("#requirement-requirementfile-export-message").html("");
    requirementfileValidateAndSearch();
}
//CLICK, SCROLL AND KEYBOARD EVENTS
//First page link in pagination
$("#requirement-requirementfile-lnk-first-page-lg, #requirement-requirementfile-lnk-first-page").on("click", function (e) {
    requirementfileActualPageNumber = 1;
    requirementfileValidateAndSearch();
});
//Previous page link in pagination
$("#requirement-requirementfile-lnk-previous-page-lg, #requirement-requirementfile-lnk-previous-page").on("click", function (e) {
    requirementfileActualPageNumber -= 1;
    requirementfileValidateAndSearch();
});
//Next page link in pagination
$("#requirement-requirementfile-lnk-next-page-lg, #requirement-requirementfile-lnk-next-page").on("click", function (e) {
    requirementfileActualPageNumber += 1;
    requirementfileValidateAndSearch();
});
//Last page link in pagination
$("#requirement-requirementfile-lnk-last-page-lg, #requirement-requirementfile-lnk-last-page").on("click", function (e) {
    requirementfileActualPageNumber = requirementfileTotalPages;
    requirementfileValidateAndSearch();
});
//Table view button
$("#requirement-requirementfile-table-view-button").on("click", function (e) {
    console.log("table");
    $("#requirement-requirementfile-view-toggler").val("Table");
    requirementfileViewToggler = "Table";
    //Reset some values to default
    requirementfileActualPageNumber = 1;
    //Clear table view
    $("#requirement-requirementfile-body-and-head-table").html("");
    requirementfileValidateAndSearch();
});
//List view button
$("#requirement-requirementfile-list-view-button").on("click", function (e) {
    console.log("list");
    $("#requirement-requirementfile-view-toggler").val("List");
    requirementfileViewToggler = "List";
    //Reset some values to default
    requirementfileActualPageNumber = 1;
    //Clear list view
    $("#requirement-requirementfile-body-list").html("");
    requirementfileValidateAndSearch();
});
//Used to list view
function requirementfileScrollDownNSearch() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var WindowsTopDistance = (_a = $(window).scrollTop()) !== null && _a !== void 0 ? _a : 0;
    var WindowsBottomDistance = ((_b = $(window).scrollTop()) !== null && _b !== void 0 ? _b : 0) + ((_c = $(window).innerHeight()) !== null && _c !== void 0 ? _c : 0);
    var CardsFooterTopPosition = (_e = (_d = $("#requirement-requirementfile-search-more-button-in-list").offset()) === null || _d === void 0 ? void 0 : _d.top) !== null && _e !== void 0 ? _e : 0;
    var CardsFooterBottomPosition = ((_g = (_f = $("#requirement-requirementfile-search-more-button-in-list").offset()) === null || _f === void 0 ? void 0 : _f.top) !== null && _g !== void 0 ? _g : 0) + ((_h = $("#requirement-requirementfile-search-more-button-in-list").outerHeight()) !== null && _h !== void 0 ? _h : 0);
    if (WindowsTopDistance > requirementfileLastTopDistance) {
        //Scroll down
        if ((WindowsBottomDistance > CardsFooterTopPosition) && (WindowsTopDistance < CardsFooterBottomPosition)) {
            //Search More button visible
            if (requirementfileActualPageNumber !== requirementfileTotalPages) {
                requirementfileScrollDownNSearchFlag = true;
                requirementfileActualPageNumber += 1;
                requirementfileValidateAndSearch();
            }
        }
        else { /*Card footer not visible*/ }
    }
    else { /*Scroll up*/ }
    requirementfileLastTopDistance = WindowsTopDistance;
}
//Used to list view
$(window).on("scroll", requirementfileScrollDownNSearch);
//# sourceMappingURL=RequirementFileQuery_jQuery.js.map