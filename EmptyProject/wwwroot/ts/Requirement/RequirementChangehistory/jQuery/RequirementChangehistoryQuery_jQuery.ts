//Import libraries to use
import { RequirementChangehistoryModel } from "../../RequirementChangehistory/TsModels/RequirementChangehistory_TsModel";
import { requirementchangehistorySelectAllPaged } from "../DTOs/requirementchangehistorySelectAllPaged";
import * as $ from "jquery";
import * as Rx from "rxjs";
import { ajax } from "rxjs/ajax";
import { Ajax } from "../../../Library/Ajax";

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
let requirementchangehistoryLastTopDistance: number = 0;
let requirementchangehistoryQueryString: string = "";
let requirementchangehistoryActualPageNumber: number = 1;
let requirementchangehistoryRowsPerPage: number = 50;
let requirementchangehistorySorterColumn: string | undefined = "";
let requirementchangehistorySortToggler: boolean = false;
let requirementchangehistoryTotalPages: number = 0;
let requirementchangehistoryTotalRows: number = 0;
let requirementchangehistoryViewToggler: string = "List";
let requirementchangehistoryScrollDownNSearchFlag: boolean = false;

class RequirementChangehistoryQuery {
    static SelectAllPagedToHTML(request_requirementchangehistorySelectAllPaged: requirementchangehistorySelectAllPaged) {
        //Used for list view
        $(window).off("scroll");

        //Load some part of table
        var TableContent: string = `<thead class="thead-light">
    <tr>
        <th scope="col">
            <div>
                <input id="requirementchangehistory-table-check-all" type="checkbox">
            </div>
        </th>
        <th scope="col">
            <button value="RequirementChangehistoryId" class="btn btn-outline-secondary btn-sm" type="button">
                Change history ID
            </button>
        </th>
        <th scope="col">
            <button value="Active" class="btn btn-outline-secondary btn-sm" type="button">
                Active
            </button>
        </th>
        <th scope="col">
            <button value="DateTimeCreation" class="btn btn-outline-secondary btn-sm" type="button">
                Date Time Creation
            </button>
        </th>
        <th scope="col">
            <button value="DateTimeLastModification" class="btn btn-outline-secondary btn-sm" type="button">
                Date Time Last Modification
            </button>
        </th>
        <th scope="col">
            <button value="UserCreationId" class="btn btn-outline-secondary btn-sm" type="button">
                User Creation
            </button>
        </th>
        <th scope="col">
            <button value="UserLastModificationId" class="btn btn-outline-secondary btn-sm" type="button">
                User Last Modification
            </button>
        </th>
        <th scope="col">
            <button value="RequirementId" class="btn btn-outline-secondary btn-sm" type="button">
                Requirement ID
            </button>
        </th>
        <th scope="col">
            <button value="RequirementStateId" class="btn btn-outline-secondary btn-sm" type="button">
                State
            </button>
        </th>
        <th scope="col">
            <button value="RequirementPriorityId" class="btn btn-outline-secondary btn-sm" type="button">
                Priority
            </button>
        </th>
        
        <th scope="col"></th>
    </tr>
</thead>
<tbody>`;

        var ListContent: string = ``;

        RequirementChangehistoryModel.SelectAllPaged(request_requirementchangehistorySelectAllPaged, $("#requirement-requirement-requirementid-input").val()).subscribe(
            {
                next: newrow => {
                    //Only works when there is data available
                    if (newrow.status != 204) {

                        const response_requirementchangehistoryQuery = newrow.response as requirementchangehistorySelectAllPaged;

                        //Set to default values if they are null
                        requirementchangehistoryQueryString = response_requirementchangehistoryQuery.requirementchangehistoryQueryString ?? "";
                        requirementchangehistoryActualPageNumber = response_requirementchangehistoryQuery.requirementchangehistoryActualPageNumber ?? 0;
                        requirementchangehistoryRowsPerPage = response_requirementchangehistoryQuery.requirementchangehistoryRowsPerPage ?? 0;
                        requirementchangehistorySorterColumn = response_requirementchangehistoryQuery.requirementchangehistorySorterColumn ?? "";
                        requirementchangehistorySortToggler = response_requirementchangehistoryQuery.requirementchangehistorySortToggler ?? false;
                        requirementchangehistoryTotalRows = response_requirementchangehistoryQuery.requirementchangehistoryTotalRows ?? 0;
                        requirementchangehistoryTotalPages = response_requirementchangehistoryQuery.requirementchangehistoryTotalPages ?? 0;

                        //Query string
                        $("#requirement-requirementchangehistory-query-string").attr("placeholder", `Search... (${requirementchangehistoryTotalRows} records)`);
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
                        if (response_requirementchangehistoryQuery?.lstRequirementChangehistoryModel?.length === 0) {
                            $("#requirement-requirementchangehistory-lnk-previous-page-lg, #requirement-requirementchangehistory-lnk-previous-page").attr("disabled", "disabled");
                            $("#requirement-requirementchangehistory-lnk-first-page-lg, #requirement-requirementchangehistory-lnk-first-page").attr("disabled", "disabled");
                            $("#requirement-requirementchangehistory-lnk-next-page-lg, #requirement-requirementchangehistory-lnk-next-page").attr("disabled", "disabled");
                            $("#requirement-requirementchangehistory-lnk-last-page-lg, #requirement-requirementchangehistory-lnk-last-page").attr("disabled", "disabled");
                            $("#requirement-requirementchangehistory-total-pages-lg, #requirement-requirementchangehistory-total-pages").html("1");
                            $("#requirement-requirementchangehistory-actual-page-number-lg, #requirement-requirementchangehistory-actual-page-number").html("1");
                        }
                        //Read data book
                        response_requirementchangehistoryQuery?.lstRequirementChangehistoryModel?.forEach(row => {

                            TableContent += `<tr>
    <!-- Checkbox -->
    <td>
        <div>
            <input class="requirementchangehistory-table-checkbox-for-row" value="${row.RequirementChangehistoryId}" type="checkbox">
        </div>
    </td>
    <!-- Data -->
    <td class="text-left text-light">
        <i class="fas fa-key"></i> ${row.RequirementChangehistoryId}
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-toggle-on"></i> ${row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>"}
        </strong>
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-calendar"></i> ${row.DateTimeCreation}
        </strong>
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-calendar"></i> ${row.DateTimeLastModification}
        </strong>
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-key"></i> ${row.UserCreationIdFantasyName}
        </strong>
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-key"></i> ${row.UserLastModificationIdFantasyName}
        </strong>
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-key"></i> ${row.RequirementId}
        </strong>
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-key"></i> ${row.RequirementStateIdName}
        </strong>
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-key"></i> ${row.RequirementPriorityIdName}
        </strong>
    </td>
</tr>`;

                            ListContent += `<div class="row mx-2">
    <div class="col-sm">
        <div class="card bg-gradient-primary mb-2">
            <div class="card-body">
                <div class="row">
                    <div class="col text-truncate">
                        <span class="text-white text-light mb-4">
                           Change history ID <i class="fas fa-key"></i> ${row.RequirementChangehistoryId}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           Active <i class="fas fa-toggle-on"></i> ${row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>"}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           Date Time Creation <i class="fas fa-calendar"></i> ${row.DateTimeCreation}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           Date Time Last Modification <i class="fas fa-calendar"></i> ${row.DateTimeLastModification}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           User Creation <i class="fas fa-key"></i> ${row.UserCreationIdFantasyName}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           User Last Modification <i class="fas fa-key"></i> ${row.UserLastModificationIdFantasyName}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           Requirement ID <i class="fas fa-key"></i> ${row.RequirementId}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           State <i class="fas fa-key"></i> ${row.RequirementStateIdName}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           Priority <i class="fas fa-key"></i> ${row.RequirementPriorityIdName}
                        </span>
                        <br/>
                        
                    </div>
                    <div class="col-auto">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
                        })

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
                complete: () => {
                    //Execute ScrollDownNSearch function when the user scroll the page
                    $(window).on("scroll", requirementchangehistoryScrollDownNSearch);

                    //Add final content to TableContent
                    TableContent += `</tbody>
                                </table>`;

                    //Check button inside list view
                    $(".requirement-requirementchangehistory-checkbox-list").on("click", function (e) {
                        //Toggler
                        if ($(this).hasClass("list-row-checked")) {
                            $(this).html(`<a class="icon icon-shape bg-white icon-sm rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="tooltip" data-original-title="check">
                                                            <i class="fas fa-circle text-white"></i>
                                                        </a>`);
                            $(this).removeClass("list-row-checked").addClass("list-row-unchecked");
                        }
                        else {
                            $(this).html(`<a class="icon icon-shape bg-white icon-sm text-primary rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="tooltip" data-original-title="check">
                                                            <i class="fas fa-check"></i>
                                                        </a>`);
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
                        let RequirementChangehistoryId = $(this).val();
                        RequirementChangehistoryModel.DeleteByRequirementChangehistoryId(RequirementChangehistoryId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                requirementchangehistoryValidateAndSearch();

                                //Show OK message
                                $("#requirement-requirementchangehistory-button-error-message-in-card").hide();
                                $("#requirement-requirementchangehistory-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Row deleted successfully`);
                                $("#requirement-requirementchangehistory-button-ok-message-in-card").show();
                            },
                            error: err => {
                                //Related to error message
                                $("#requirement-requirementchangehistory-error-message-title").html("RequirementChangehistoryModel.DeleteByRequirementChangehistoryId(RequirementChangehistoryId).subscribe(...)");
                                $("#requirement-requirementchangehistory-error-message-text").html(err);
                                $("#requirement-requirementchangehistory-button-error-message-in-card").show();
                            }
                        });
                    });

                    //Copy button in table and list
                    $("div.dropdown-menu button.requirement-requirementchangehistory-table-copy-button, div.dropdown-menu button.requirement-requirementchangehistory-list-copy-button").on("click", function (e) {
                        let RequirementChangehistoryId = $(this).val();
                        RequirementChangehistoryModel.CopyByRequirementChangehistoryId(RequirementChangehistoryId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                requirementchangehistoryValidateAndSearch();

                                //Show OK message
                                $("#requirement-requirementchangehistory-button-error-message-in-card").hide();
                                $("#requirement-requirementchangehistory-button-ok-message-in-card").html(`<strong>
                                                                    <i class="fas fa-check"></i>
                                                                </strong> Row copied successfully`);
                                $("#requirement-requirementchangehistory-button-ok-message-in-card").show();
                            },
                            error: err => {
                                //Show error message
                                $("#requirement-requirementchangehistory-error-message-title").html("RequirementChangehistoryModel.CopyByRequirementChangehistoryId(RequirementChangehistoryId).subscribe(...)");
                                $("#requirement-requirementchangehistory-error-message-text").html(err);
                                $("#requirement-requirementchangehistory-button-error-message-in-card").show();
                            }
                        });
                    });
                },
                error: err => {
                    //Show error message
                    $("#requirement-requirementchangehistory-error-message-title").html("RequirementChangehistoryModel.SelectAllPaged(request_requirementchangehistorymodelQ).subscribe(...)");
                    $("#requirement-requirementchangehistory-error-message-text").html(err);
                    $("#requirement-requirementchangehistory-button-error-message-in-card").show();
                }
            });
    }
}

function requirementchangehistoryValidateAndSearch() {

    //Hide error and OK message button
    $("#requirement-requirementchangehistory-button-error-message-in-card").hide();
    $("#requirement-requirementchangehistory-button-ok-message-in-card").hide();

    var _requirementchangehistorySelectAllPaged: requirementchangehistorySelectAllPaged = {
        requirementchangehistoryQueryString,
        requirementchangehistoryActualPageNumber,
        requirementchangehistoryRowsPerPage,
        requirementchangehistorySorterColumn,
        requirementchangehistorySortToggler,
        requirementchangehistoryTotalRows,
        requirementchangehistoryTotalPages
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
    //If undefined, set QueryString to "" value
    requirementchangehistoryQueryString = ($(this).val()?.toString()) ?? "" ;
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
    let WindowsTopDistance: number = $(window).scrollTop() ?? 0;
    let WindowsBottomDistance: number = ($(window).scrollTop() ?? 0) + ($(window).innerHeight() ?? 0);
    let CardsFooterTopPosition: number = $("#requirement-requirementchangehistory-search-more-button-in-list").offset()?.top ?? 0;
    let CardsFooterBottomPosition: number = ($("#requirement-requirementchangehistory-search-more-button-in-list").offset()?.top ?? 0) + ($("#requirement-requirementchangehistory-search-more-button-in-list").outerHeight() ?? 0);

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