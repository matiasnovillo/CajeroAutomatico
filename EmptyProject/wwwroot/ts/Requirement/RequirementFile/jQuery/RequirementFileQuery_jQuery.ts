//Import libraries to use
import { RequirementFileModel } from "../../RequirementFile/TsModels/RequirementFile_TsModel";
import { requirementfileSelectAllPaged } from "../DTOs/requirementfileSelectAllPaged";
import * as $ from "jquery";
import * as Rx from "rxjs";
import { ajax } from "rxjs/ajax";
import { Ajax } from "../../../Library/Ajax";
import "bootstrap-notify";

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
let requirementfileLastTopDistance: number = 0;
let requirementfileQueryString: string = "";
let requirementfileActualPageNumber: number = 1;
let requirementfileRowsPerPage: number = 50;
let requirementfileSorterColumn: string | undefined = "";
let requirementfileSortToggler: boolean = false;
let requirementfileTotalPages: number = 0;
let requirementfileTotalRows: number = 0;
let requirementfileViewToggler: string = "List";
let requirementfileScrollDownNSearchFlag: boolean = false;

class RequirementFileQuery {
    static SelectAllPagedToHTML(request_requirementfileSelectAllPaged: requirementfileSelectAllPaged) {
        //Used for list view
        $(window).off("scroll");

        //Load some part of table
        var TableContent: string = `<thead class="thead-light">
    <tr>
        <th scope="col">
            <div>
                <input id="requirementfile-table-check-all" type="checkbox">
            </div>
        </th>
        <th scope="col">
            <button value="RequirementFileId" class="btn btn-outline-secondary btn-sm" type="button">
                File ID
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
            <button value="FilePath" class="btn btn-outline-secondary btn-sm" type="button">
                File Path
            </button>
        </th>
        
        <th scope="col"></th>
    </tr>
</thead>
<tbody>`;

        var ListContent: string = ``;

        RequirementFileModel.SelectAllPaged(request_requirementfileSelectAllPaged, $("#requirement-requirement-requirementid-input").val()).subscribe(
            {
                next: newrow => {
                    //Only works when there is data available
                    if (newrow.status != 204) {

                        const response_requirementfileQuery = newrow.response as requirementfileSelectAllPaged;

                        //Set to default values if they are null
                        requirementfileQueryString = response_requirementfileQuery.requirementfileQueryString ?? "";
                        requirementfileActualPageNumber = response_requirementfileQuery.requirementfileActualPageNumber ?? 0;
                        requirementfileRowsPerPage = response_requirementfileQuery.requirementfileRowsPerPage ?? 0;
                        requirementfileSorterColumn = response_requirementfileQuery.requirementfileSorterColumn ?? "";
                        requirementfileSortToggler = response_requirementfileQuery.requirementfileSortToggler ?? false;
                        requirementfileTotalRows = response_requirementfileQuery.requirementfileTotalRows ?? 0;
                        requirementfileTotalPages = response_requirementfileQuery.requirementfileTotalPages ?? 0;

                        //Query string
                        $("#requirement-requirementfile-query-string").attr("placeholder", `Search... (${requirementfileTotalRows} records)`);
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
                        if (response_requirementfileQuery?.lstRequirementFileModel?.length === 0) {
                            $("#requirement-requirementfile-lnk-previous-page-lg, #requirement-requirementfile-lnk-previous-page").attr("disabled", "disabled");
                            $("#requirement-requirementfile-lnk-first-page-lg, #requirement-requirementfile-lnk-first-page").attr("disabled", "disabled");
                            $("#requirement-requirementfile-lnk-next-page-lg, #requirement-requirementfile-lnk-next-page").attr("disabled", "disabled");
                            $("#requirement-requirementfile-lnk-last-page-lg, #requirement-requirementfile-lnk-last-page").attr("disabled", "disabled");
                            $("#requirement-requirementfile-total-pages-lg, #requirement-requirementfile-total-pages").html("1");
                            $("#requirement-requirementfile-actual-page-number-lg, #requirement-requirementfile-actual-page-number").html("1");
                        }
                        //Read data book
                        response_requirementfileQuery?.lstRequirementFileModel?.forEach(row => {

                            TableContent += `<tr>
    <!-- Checkbox -->
    <td>
        <div>
            <input class="requirementfile-table-checkbox-for-row" value="${row.RequirementFileId}" type="checkbox">
        </div>
    </td>
    <!-- Data -->
    <td class="text-left text-light">
        <i class="fas fa-key"></i> ${row.RequirementFileId}
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
        <a href="${row.FilePath}" download>
            <strong>
                <i class="fas fa-file"></i> ${row.FilePath}
            </strong>
        </a>
    </td>
    
    <!-- Actions -->
    <td class="text-right">
        <div class="dropdown">
            <button class="btn btn-icon-only text-danger" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-trash"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <button class="dropdown-item text-danger requirement-requirementfile-table-delete-button" value="${row.RequirementFileId}" type="button">
                    <i class="fas fa-exclamation-triangle"></i> Yes, delete
                </button>
            </div>
        </div>
    </td>
</tr>`;

                            ListContent += `<div class="row mx-2">
    <div class="col-sm">
        <div class="card bg-gradient-primary mb-2">
            <div class="card-body">
                <div class="row">
                    <div class="col text-truncate">
                        <span class="text-white text-light mb-4">
                           File ID <i class="fas fa-key"></i> ${row.RequirementFileId}
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
                            <a href="${row.FilePath}" download class="text-white">
                           File Path <i class="fas fa-file"></i> ${row.FilePath}
                            </a>
                        </span>
                        <br/>
                        
                    </div>
                    <div class="col-auto">
                    </div>
                </div>
                <!-- Actions -->
                <div class="row">
                    <div class="col">
                        <div class="justify-content-end text-right mt-2">
                            <div class="dropup">
                                <a class="icon icon-shape bg-white icon-sm text-primary rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <button value="${row.RequirementFileId}" class="dropdown-item text-danger requirement-requirementfile-list-delete-button" type="button">
                                        <i class="fas fa-trash"></i>&nbsp;Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
                        })

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
                complete: () => {
                    //Execute ScrollDownNSearch function when the user scroll the page
                    $(window).on("scroll", requirementfileScrollDownNSearch);

                    //Add final content to TableContent
                    TableContent += `</tbody>
                                </table>`;

                    //Check button inside list view
                    $(".requirement-requirementfile-checkbox-list").on("click", function (e) {
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
                        let RequirementFileId = $(this).val();
                        RequirementFileModel.DeleteByRequirementFileId(RequirementFileId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                //SUCCESS
                                // @ts-ignore
                                $.notify({ icon: "fas fa-check", message: "Row deleted successfully" }, { type: "success", placement: { from: "bottom", align: "center" } });

                                requirementfileValidateAndSearch();
                            },
                            error: err => {
                                //ERROR
                                // @ts-ignore
                                $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to delete data" }, { type: "danger", placement: { from: "bottom", align: "center" } });
                                console.log(err);
                            }
                        });
                    });

                    //Copy button in table and list
                    $("div.dropdown-menu button.requirement-requirementfile-table-copy-button, div.dropdown-menu button.requirement-requirementfile-list-copy-button").on("click", function (e) {
                        let RequirementFileId = $(this).val();
                        RequirementFileModel.CopyByRequirementFileId(RequirementFileId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                //SUCCESS
                                // @ts-ignore
                                $.notify({ icon: "fas fa-check", message: "Row copied successfully" }, { type: "success", placement: { from: "bottom", align: "center" } });

                                requirementfileValidateAndSearch();
                            },
                            error: err => {
                                //ERROR
                                // @ts-ignore
                                $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to copy data" }, { type: "danger", placement: { from: "bottom", align: "center" } });
                                console.log(err);
                            }
                        });
                    });
                },
                error: err => {
                    //ERROR
                    // @ts-ignore
                    $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to get data" }, { type: "danger", placement: { from: "bottom", align: "center" } });
                    console.log(err);
                }
            });
    }
}

function requirementfileValidateAndSearch() {

    var _requirementfileSelectAllPaged: requirementfileSelectAllPaged = {
        requirementfileQueryString,
        requirementfileActualPageNumber,
        requirementfileRowsPerPage,
        requirementfileSorterColumn,
        requirementfileSortToggler,
        requirementfileTotalRows,
        requirementfileTotalPages
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
    let WindowsTopDistance: number = $(window).scrollTop() ?? 0;
    let WindowsBottomDistance: number = ($(window).scrollTop() ?? 0) + ($(window).innerHeight() ?? 0);
    let CardsFooterTopPosition: number = $("#requirement-requirementfile-search-more-button-in-list").offset()?.top ?? 0;
    let CardsFooterBottomPosition: number = ($("#requirement-requirementfile-search-more-button-in-list").offset()?.top ?? 0) + ($("#requirement-requirementfile-search-more-button-in-list").outerHeight() ?? 0);

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