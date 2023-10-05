//Import libraries to use
import { ExampleModel } from "../../Example/TsModels/Example_TsModel";
import { exampleSelectAllPaged } from "../DTOs/exampleSelectAllPaged";
import * as $ from "jquery";
import * as Rx from "rxjs";
import { ajax } from "rxjs/ajax";
import { Ajax } from "../../../Library/Ajax";
import "bootstrap-notify";

/*
 * GUID:e6c09dfe-3a3e-461b-b3f9-734aee05fc7b
 * 
 * Coded by fiyistack.com
 * Copyright © 2023
 * 
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 * 
*/

//Stack: 10

//Last modification on: 15/02/2023 16:56:40

//Set default values
let LastTopDistance: number = 0;
let QueryString: string = "";
let ActualPageNumber: number = 1;
let RowsPerPage: number = 50;
let SorterColumn: string | undefined = "";
let SortToggler: boolean = false;
let TotalPages: number = 0;
let TotalRows: number = 0;
let ViewToggler: string = "List";
let ScrollDownNSearchFlag: boolean = false;

class ExampleQuery {
    static SelectAllPagedToHTML(request_exampleSelectAllPaged: exampleSelectAllPaged) {
        //Used for list view
        $(window).off("scroll");

        //Load some part of table
        var TableContent: string = `<thead class="thead-light">
    <tr>
        <th scope="col">
            <div>
                <input id="example-table-check-all" type="checkbox">
            </div>
        </th>
        <th scope="col">
            <button value="ExampleId" class="btn btn-outline-secondary btn-sm" type="button">
                ExampleId
            </button>
        </th>
        <th scope="col">
            <button value="Active" class="btn btn-outline-secondary btn-sm" type="button">
                Active
            </button>
        </th>
        <th scope="col">
            <button value="DateTimeCreation" class="btn btn-outline-secondary btn-sm" type="button">
                DateTimeCreation
            </button>
        </th>
        <th scope="col">
            <button value="DateTimeLastModification" class="btn btn-outline-secondary btn-sm" type="button">
                DateTimeLastModification
            </button>
        </th>
        <th scope="col">
            <button value="UserCreationId" class="btn btn-outline-secondary btn-sm" type="button">
                UserCreationId
            </button>
        </th>
        <th scope="col">
            <button value="UserLastModificationId" class="btn btn-outline-secondary btn-sm" type="button">
                UserLastModificationId
            </button>
        </th>
        <th scope="col">
            <button value="Boolean" class="btn btn-outline-secondary btn-sm" type="button">
                Boolean
            </button>
        </th>
        <th scope="col">
            <button value="DateTime" class="btn btn-outline-secondary btn-sm" type="button">
                DateTime
            </button>
        </th>
        <th scope="col">
            <button value="Decimal" class="btn btn-outline-secondary btn-sm" type="button">
                Decimal
            </button>
        </th>
        <th scope="col">
            <button value="Integer" class="btn btn-outline-secondary btn-sm" type="button">
                Integer
            </button>
        </th>
        <th scope="col">
            <button value="TextBasic" class="btn btn-outline-secondary btn-sm" type="button">
                TextBasic
            </button>
        </th>
        <th scope="col">
            <button value="TextEmail" class="btn btn-outline-secondary btn-sm" type="button">
                TextEmail
            </button>
        </th>
        <th scope="col">
            <button value="TextFile" class="btn btn-outline-secondary btn-sm" type="button">
                TextFile
            </button>
        </th>
        <th scope="col">
            <button value="TextPassword" class="btn btn-outline-secondary btn-sm" type="button">
                TextPassword
            </button>
        </th>
        <th scope="col">
            <button value="TextPhoneNumber" class="btn btn-outline-secondary btn-sm" type="button">
                TextPhoneNumber
            </button>
        </th>
        <th scope="col">
            <button value="TextTag" class="btn btn-outline-secondary btn-sm" type="button">
                TextTag
            </button>
        </th>
        <th scope="col">
            <button value="TextTextArea" class="btn btn-outline-secondary btn-sm" type="button">
                TextTextArea
            </button>
        </th>
        <th scope="col">
            <button value="TextTextEditor" class="btn btn-outline-secondary btn-sm" type="button">
                TextTextEditor
            </button>
        </th>
        <th scope="col">
            <button value="TextURL" class="btn btn-outline-secondary btn-sm" type="button">
                TextURL
            </button>
        </th>
        <th scope="col">
            <button value="ForeignKeyDropDown" class="btn btn-outline-secondary btn-sm" type="button">
                ForeignKeyDropDown
            </button>
        </th>
        <th scope="col">
            <button value="ForeignKeyOption" class="btn btn-outline-secondary btn-sm" type="button">
                ForeignKeyOption
            </button>
        </th>
        <th scope="col">
            <button value="TextHexColour" class="btn btn-outline-secondary btn-sm" type="button">
                TextHexColour
            </button>
        </th>
        <th scope="col">
            <button value="Time" class="btn btn-outline-secondary btn-sm" type="button">
                Time
            </button>
        </th>
        
        <th scope="col"></th>
    </tr>
</thead>
<tbody>`;

        var ListContent: string = ``;

        ExampleModel.SelectAllPaged(request_exampleSelectAllPaged).subscribe(
            {
                next: newrow => {
                    //Only works when there is data available
                    if (newrow.status != 204) {

                        const response_exampleQuery = newrow.response as exampleSelectAllPaged;

                        //Set to default values if they are null
                        QueryString = response_exampleQuery.QueryString ?? "";
                        ActualPageNumber = response_exampleQuery.ActualPageNumber ?? 0;
                        RowsPerPage = response_exampleQuery.RowsPerPage ?? 0;
                        SorterColumn = response_exampleQuery.SorterColumn ?? "";
                        SortToggler = response_exampleQuery.SortToggler ?? false;
                        TotalRows = response_exampleQuery.TotalRows ?? 0;
                        TotalPages = response_exampleQuery.TotalPages ?? 0;

                        //Query string
                        $("#examples-example-query-string").attr("placeholder", `Search... (${TotalRows} records)`);
                        //Total pages of pagination
                        $("#examples-example-total-pages-lg, #examples-example-total-pages").html(TotalPages.toString());
                        //Actual page number of pagination
                        $("#examples-example-actual-page-number-lg, #examples-example-actual-page-number").html(ActualPageNumber.toString());
                        //If we are at the final of book disable next and last buttons in pagination
                        if (ActualPageNumber === TotalPages) {
                            $("#examples-example-lnk-next-page-lg, #examples-example-lnk-next-page").attr("disabled", "disabled");
                            $("#examples-example-lnk-last-page-lg, #examples-example-lnk-last-page").attr("disabled", "disabled");
                            $("#examples-example-search-more-button-in-list").html("");
                        }
                        else {
                            $("#examples-example-lnk-next-page-lg, #examples-example-lnk-next-page").removeAttr("disabled");
                            $("#examples-example-lnk-last-page-lg, #examples-example-lnk-last-page").removeAttr("disabled");
                            //Scroll arrow for list view
                            $("#examples-example-search-more-button-in-list").html("<i class='fas fa-2x fa-chevron-down'></i>");
                        }
                        //If we are at the begining of the book disable previous and first buttons in pagination
                        if (ActualPageNumber === 1) {
                            $("#examples-example-lnk-previous-page-lg, #examples-example-lnk-previous-page").attr("disabled", "disabled");
                            $("#examples-example-lnk-first-page-lg, #examples-example-lnk-first-page").attr("disabled", "disabled");
                        }
                        else {
                            $("#examples-example-lnk-previous-page-lg, #examples-example-lnk-previous-page").removeAttr("disabled");
                            $("#examples-example-lnk-first-page-lg, #examples-example-lnk-first-page").removeAttr("disabled");
                        }
                        //If book is empty set to default pagination values
                        if (response_exampleQuery?.lstExampleModel?.length === 0) {
                            $("#examples-example-lnk-previous-page-lg, #examples-example-lnk-previous-page").attr("disabled", "disabled");
                            $("#examples-example-lnk-first-page-lg, #examples-example-lnk-first-page").attr("disabled", "disabled");
                            $("#examples-example-lnk-next-page-lg, #examples-example-lnk-next-page").attr("disabled", "disabled");
                            $("#examples-example-lnk-last-page-lg, #examples-example-lnk-last-page").attr("disabled", "disabled");
                            $("#examples-example-total-pages-lg, #examples-example-total-pages").html("1");
                            $("#examples-example-actual-page-number-lg, #examples-example-actual-page-number").html("1");
                        }
                        //Read data book
                        response_exampleQuery?.lstExampleModel?.forEach(row => {

                            TableContent += `<tr>
    <!-- Checkbox -->
    <td>
        <div>
            <input class="example-table-checkbox-for-row" value="${row.ExampleId}" type="checkbox">
        </div>
    </td>
    <!-- Data -->
    <td class="text-left text-light">
        <i class="fas fa-key"></i> ${row.ExampleId}
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
            <i class="fas fa-key"></i> ${row.UserCreationId}
        </strong>
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-key"></i> ${row.UserLastModificationId}
        </strong>
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-toggle-on"></i> ${row.Boolean == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>"}
        </strong>
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-calendar"></i> ${row.DateTime}
        </strong>
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-divide"></i> ${row.Decimal}
        </strong>
    </td>
    <td class="text-left">
        <strong><i class="fas fa-divide">
            </i> ${row.Integer}
        </strong>
    </td>
    <td class="text-left">
        <strong><i class="fas fa-font">
            </i> ${row.TextBasic}
        </strong>
    </td>
    <td class="text-left">
        <a href="mailto:${row.TextEmail}">
            <strong>
                <i class="fas fa-at"></i> ${row.TextEmail}
            </strong>
        </a>
    </td>
    <td class="text-left">
        <a href="${row.TextFile}">
            <strong>
                <i class="fas fa-file"></i> ${row.TextFile}
            </strong>
        </a>
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-asterisk"></i> ${row.TextPassword}
        </strong>
    </td>
    <td class="text-left">
        <a href="tel:${row.TextPhoneNumber}">
            <strong>
                <i class="fas fa-phone"></i> ${row.TextPhoneNumber}
            </strong>
        </a>
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-tag"></i> ${row.TextTag}
        </strong>
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-font"></i> ${row.TextTextArea}
        </strong>
    </td>
    <td class="text-left">
        <i class="fas fa-font"></i> ${row.TextTextEditor}
    </td>
    <td class="text-left">
        <a href="${row.TextURL}" target="_blank">
            <strong>
                <i class="fas fa-globe"></i> ${row.TextURL}
            </strong>
        </a>
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-key"></i> ${row.ForeignKeyDropDown}
        </strong>
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-key"></i> ${row.ForeignKeyOption}
        </strong>
    </td>
    <td class="text-left" >
        <strong style="color:#${row.TextHexColour}">
            <i class="fas fa-palette"></i> ${row.TextHexColour}
        </strong>
    </td>
    <td class="text-left">
        <strong>
            <i class="fas fa-clock"></i> ${row.Time?.substring(0, 12)}
        </strong>
    </td>
    
    <!-- Actions -->
    <td class="text-right">
        <a class="btn btn-icon-only text-primary" href="/Examples/ExampleNonQueryPage?ExampleId=${row.ExampleId}" role="button" data-toggle="tooltip" data-original-title="Edit">
            <i class="fas fa-edit"></i>
        </a>
        <div class="dropdown">
            <button class="btn btn-icon-only text-danger" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-trash"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <button class="dropdown-item text-danger examples-example-table-delete-button" value="${row.ExampleId}" type="button">
                    <i class="fas fa-exclamation-triangle"></i> Yes, delete
                </button>
            </div>
        </div>
        <div class="dropdown">
            <button class="btn btn-sm btn-icon-only text-primary" href="#" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-ellipsis-v"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                <button type="button" class="dropdown-item examples-example-table-copy-button" value="${row.ExampleId}">
                    <i class="fas fa-copy text-primary"></i>&nbsp;Copy
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
                           ExampleId <i class="fas fa-key"></i> ${row.ExampleId}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           Active <i class="fas fa-toggle-on"></i> ${row.Active == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>"}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           DateTimeCreation <i class="fas fa-calendar"></i> ${row.DateTimeCreation}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           DateTimeLastModification <i class="fas fa-calendar"></i> ${row.DateTimeLastModification}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           UserCreationId <i class="fas fa-key"></i> ${row.UserCreationId}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           UserLastModificationId <i class="fas fa-key"></i> ${row.UserLastModificationId}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           Boolean <i class="fas fa-toggle-on"></i> ${row.Boolean == true ? "Active <i class='text-success fas fa-circle'></i>" : "Not active <i class='text-danger fas fa-circle'></i>"}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           DateTime <i class="fas fa-calendar"></i> ${row.DateTime}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           Decimal <i class="fas fa-divide"></i> ${row.Decimal}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                            Integer <i class="fas fa-divide"></i> ${row.Integer}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           TextBasic <i class="fas fa-font"></i> ${row.TextBasic}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                            <a style="color:#FFFFFF" href="mailto:${row.TextEmail}">
                               TextEmail <i class="fas fa-at"></i> ${row.TextEmail}
                            <a/>
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           TextFile <i class="fas fa-file"></i> ${row.TextFile}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           TextPassword <i class="fas fa-asterisk"></i> ${row.TextPassword}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                            <a style="color:#FFFFFF" href="tel:${row.TextPhoneNumber}">
                               TextPhoneNumber <i class="fas fa-phone"></i> ${row.TextPhoneNumber}
                            </a>
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           TextTag <i class="fas fa-tag"></i> ${row.TextTag}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           TextTextArea <i class="fas fa-font"></i> ${row.TextTextArea}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           TextTextEditor <i class="fas fa-font"></i> ${row.TextTextEditor}
                        </span>
                        <br/>
                        <span class="mb-4">
                            <a href="${row.TextURL}" style="color:#FFFFFF" target="_blank">
                               TextURL <i class="fas fa-globe"></i> ${row.TextURL}
                            </a>
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           ForeignKeyDropDown <i class="fas fa-key"></i> ${row.ForeignKeyDropDown}
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           ForeignKeyOption <i class="fas fa-key"></i> ${row.ForeignKeyOption}
                        </span>
                        <br/>
                        <span class="mb-4" style="color:#${row.TextHexColour}">
                           TextHexColour <i class="fas fa-palette"></i>
                            <strong>${row.TextHexColour}</strong>
                        </span>
                        <br/>
                        <span class="text-white mb-4">
                           Time <i class="fas fa-clock"></i> ${row.Time?.substring(0, 12)}
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
                            <div class="mb-2">
                                <a class="examples-example-checkbox-list list-row-unchecked icon icon-shape bg-white icon-sm rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="tooltip" data-original-title="Check">
                                    <i class="fas fa-circle text-white"></i>
                                </a>
                                <input type="hidden" value="${row.ExampleId}"/>
                            </div>
                            <a class="icon icon-shape bg-white icon-sm rounded-circle shadow" href="/Examples/ExampleNonQueryPage?ExampleId=${row.ExampleId}" role="button" data-toggle="tooltip" data-original-title="edit">
                                <i class="fas fa-edit text-primary"></i>
                            </a>
                            <div class="dropup">
                                <a class="icon icon-shape bg-white icon-sm text-primary rounded-circle shadow" href="javascript:void(0)" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <button value="${row.ExampleId}" class="dropdown-item text-primary examples-example-list-copy-button" type="button">
                                        <i class="fas fa-copy"></i>&nbsp;Copy
                                    </button>
                                    <button value="${row.ExampleId}" class="dropdown-item text-danger examples-example-list-delete-button" type="button">
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
                        if (ViewToggler === "Table") {
                            $("#examples-example-body-and-head-table").html("");
                            $("#examples-example-body-and-head-table").html(TableContent);
                        }
                        else {
                            //Used for list view
                            if (ScrollDownNSearchFlag) {
                                $("#examples-example-body-list").append(ListContent);
                                ScrollDownNSearchFlag = false;
                            }
                            else {
                                //Clear list view
                                $("#examples-example-body-list").html("");
                                $("#examples-example-body-list").html(ListContent);
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
                    $(window).on("scroll", ScrollDownNSearch);

                    //Add final content to TableContent
                    TableContent += `</tbody>
                                </table>`;

                    //Check button inside list view
                    $(".examples-example-checkbox-list").on("click", function (e) {
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
                    $("#example-table-check-all").on("click", function (e) { 
                        //Toggler
                        if ($("tr td div input.example-table-checkbox-for-row").is(":checked")) {
                            $("tr td div input.example-table-checkbox-for-row").removeAttr("checked");
                        }
                        else {
                            $("tr td div input.example-table-checkbox-for-row").attr("checked", "checked");
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
                    $("div.dropdown-menu button.examples-example-table-delete-button, div.dropdown-menu button.examples-example-list-delete-button").on("click", function (e) {
                        let ExampleId = $(this).val();
                        ExampleModel.DeleteByExampleId(ExampleId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                //SUCCESS
                                // @ts-ignore
                                $.notify({ icon: "fas fa-check", message: "Row deleted successfully" }, { type: "success", placement: { from: "bottom", align: "center" } });

                                ValidateAndSearch();
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
                    $("div.dropdown-menu button.examples-example-table-copy-button, div.dropdown-menu button.examples-example-list-copy-button").on("click", function (e) {
                        let ExampleId = $(this).val();
                        ExampleModel.CopyByExampleId(ExampleId).subscribe({
                            next: newrow => {
                            },
                            complete: () => {
                                //SUCCESS
                                // @ts-ignore
                                $.notify({ icon: "fas fa-check", message: "Row copied successfully" }, { type: "success", placement: { from: "bottom", align: "center" } });

                                ValidateAndSearch();
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

function ValidateAndSearch() {

    var _exampleSelectAllPaged: exampleSelectAllPaged = {
        QueryString,
        ActualPageNumber,
        RowsPerPage,
        SorterColumn,
        SortToggler,
        TotalRows,
        TotalPages
    };

    ExampleQuery.SelectAllPagedToHTML(_exampleSelectAllPaged);
}

//LOAD EVENT
if ($("#examples-example-title-page").html().includes("Query example")) {
    //Set to default values
    QueryString = "";
    ActualPageNumber = 1;
    RowsPerPage = 50;
    SorterColumn = "ExampleId";
    SortToggler = false;
    TotalRows = 0;
    TotalPages = 0;
    ViewToggler = "List";
    //Disable first and previous links in pagination
    $("#examples-example-lnk-first-page-lg, #examples-example-lnk-first-page").attr("disabled", "disabled");
    $("#examples-example-lnk-previous-page-lg, #examples-example-lnk-previous-page").attr("disabled", "disabled");
    //Hide messages
    $("#examples-example-export-message").html("");

    ValidateAndSearch();
}
//CLICK, SCROLL AND KEYBOARD EVENTS
//Search button
$($("#examples-example-search-button")).on("click", function () {
    ValidateAndSearch();
});

//Query string
$("#examples-example-query-string").on("change keyup input", function (e) {
    //If undefined, set QueryString to "" value
    QueryString = ($(this).val()?.toString()) ?? "" ;
    ValidateAndSearch();
});

//First page link in pagination
$("#examples-example-lnk-first-page-lg, #examples-example-lnk-first-page").on("click", function (e) {
    ActualPageNumber = 1;
    ValidateAndSearch();
});

//Previous page link in pagination
$("#examples-example-lnk-previous-page-lg, #examples-example-lnk-previous-page").on("click", function (e) {
    ActualPageNumber -= 1;
    ValidateAndSearch();
});

//Next page link in pagination
$("#examples-example-lnk-next-page-lg, #examples-example-lnk-next-page").on("click", function (e) {
    ActualPageNumber += 1;
    ValidateAndSearch();
});

//Last page link in pagination
$("#examples-example-lnk-last-page-lg, #examples-example-lnk-last-page").on("click", function (e) {
    ActualPageNumber = TotalPages;
    ValidateAndSearch();
});

//Table view button
$("#examples-example-table-view-button").on("click", function (e) {
    $("#examples-example-view-toggler").val("Table");
    ViewToggler = "Table";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear table view
    $("#examples-example-body-and-head-table").html("");
    ValidateAndSearch();
});

//List view button
$("#examples-example-list-view-button").on("click", function (e) {
    $("#examples-example-view-toggler").val("List");
    ViewToggler = "List";
    //Reset some values to default
    ActualPageNumber = 1;
    //Clear list view
    $("#examples-example-body-list").html("");
    ValidateAndSearch();
});

//Used to list view
function ScrollDownNSearch() {
    let WindowsTopDistance: number = $(window).scrollTop() ?? 0;
    let WindowsBottomDistance: number = ($(window).scrollTop() ?? 0) + ($(window).innerHeight() ?? 0);
    let CardsFooterTopPosition: number = $("#examples-example-search-more-button-in-list").offset()?.top ?? 0;
    let CardsFooterBottomPosition: number = ($("#examples-example-search-more-button-in-list").offset()?.top ?? 0) + ($("#examples-example-search-more-button-in-list").outerHeight() ?? 0);

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

//Export as PDF button
$("#examples-example-export-as-pdf").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#examples-example-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else{
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.example-table-checkbox-for-row:checked").each(function () {
                CheckedRows.push($(this).val());
            });

            Body = {
                AjaxForString: CheckedRows.toString()
            };
        }
        else {
            $("div .list-row-checked").each(function () {
                //With .next() we access to input type hidden
                CheckedRows.push($(this).next().val());
            });

            Body = {
                AjaxForString: CheckedRows.toString()
            };
        }
    }

    Rx.from(ajax.post("/api/Examples/Example/1/ExportAsPDF/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#examples-example-export-message").html("<strong>Exporting as PDF</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //SUCCESS
            // @ts-ignore
            $.notify({ icon: "fas fa-check", message: "Conversion completed" }, { type: "success", placement: { from: "bottom", align: "center" } });

            //Show download button for PDF file
            $("#examples-example-export-message").html(`<a class="btn btn-icon btn-success" href="/PDFFiles/Examples/Example/Example_${DateTimeNow.AjaxForString}.pdf" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-pdf"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);

        },
        error: err => {
            //ERROR
            // @ts-ignore
            $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to convert" }, { type: "danger", placement: { from: "bottom", align: "center" } });
            console.log(err);
        }
    });
});

//Export as Excel button
$("#examples-example-export-as-excel").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#examples-example-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.example-table-checkbox-for-row:checked").each(function () {
                CheckedRows.push($(this).val());
            });

            Body = {
                AjaxForString: CheckedRows.toString()
            };
        }
        else {
            $("div .list-row-checked").each(function () {
                //With .next() we access to input type hidden
                CheckedRows.push($(this).next().val());
            });

            Body = {
                AjaxForString: CheckedRows.toString()
            };
        }
    }

    Rx.from(ajax.post("/api/Examples/Example/1/ExportAsExcel/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#examples-example-export-message").html("<strong>Exporting as Excel</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //SUCCESS
            // @ts-ignore
            $.notify({ icon: "fas fa-check", message: "Conversion completed" }, { type: "success", placement: { from: "bottom", align: "center" } });

            //Show download button for Excel file
            $("#examples-example-export-message").html(`<a class="btn btn-icon btn-success" href="/ExcelFiles/Examples/Example/Example_${DateTimeNow.AjaxForString}.xlsx" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-excel"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);
        },
        error: err => {
            //ERROR
            // @ts-ignore
            $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to convert" }, { type: "danger", placement: { from: "bottom", align: "center" } });
            console.log(err);
        }
    });
});

//Export as CSV button
$("#examples-example-export-as-csv").on("click", function (e) {
    //There are two exportation types, All and JustChecked
    let ExportationType: string = "";
    let DateTimeNow: Ajax;
    let Body: Ajax = {};
    //Define a header for HTTP protocol with Accept (receiver data type) and Content-Type (sender data type)
    let Header: any = {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8'
    };

    if ($("#examples-example-export-rows-all-checkbox").is(":checked")) {
        ExportationType = "All";
    }
    else {
        ExportationType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.example-table-checkbox-for-row:checked").each(function () {
                CheckedRows.push($(this).val());
            });

            Body = {
                AjaxForString: CheckedRows.toString()
            };
        }
        else {
            $("div .list-row-checked").each(function () {
                //With .next() we access to input type hidden
                CheckedRows.push($(this).next().val());
            });

            Body = {
                AjaxForString: CheckedRows.toString()
            };
        }
    }

    Rx.from(ajax.post("/api/Examples/Example/1/ExportAsCSV/" + ExportationType, Body, Header)).subscribe({
        next: newrow => {
            $("#examples-example-export-message").html("<strong>Exporting as CSV</strong>");
            DateTimeNow = newrow.response as Ajax;
        },
        complete: () => {
            //SUCCESS
            // @ts-ignore
            $.notify({ icon: "fas fa-check", message: "Conversion completed" }, { type: "success", placement: { from: "bottom", align: "center" } });

            //Show download button for CSV file
            $("#examples-example-export-message").html(`<a class="btn btn-icon btn-success" href="/CSVFiles/Examples/Example/Example_${DateTimeNow.AjaxForString}.csv" type="button" download>
                                            <span class="btn-inner--icon"><i class="fas fa-file-csv"></i></span>
                                            <span class="btn-inner--text">Download</span>
                                        </a>`);
        },
        error: err => {
            //ERROR
            // @ts-ignore
            $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to convert" }, { type: "danger", placement: { from: "bottom", align: "center" } });
            console.log(err);
        }
    });
});

//Export close button in modal
$("#examples-example-export-close-button").on("click", function (e) {
    $("#examples-example-export-message").html("");
});

//Massive action Copy
$("#examples-example-massive-action-copy").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    let CopyType: string = "";
    let Body: Ajax = {};

    if ($("#examples-example-copy-rows-all-checkbox").is(":checked")) {
        CopyType = "All";
    }
    else {
        CopyType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.example-table-checkbox-for-row:checked").each(function () {
                CheckedRows.push($(this).val());
            });
        }
        else {
            $("div .list-row-checked").each(function () {
                //With .next() we access to input type hidden
                CheckedRows.push($(this).next().val());
            });
        }
        Body = {
            AjaxForString: CheckedRows.toString()
        };
    }

    ExampleModel.CopyManyOrAll(CopyType, Body).subscribe({
        next: newrow => {
        },
        complete: () => {
            //SUCCESS
            // @ts-ignore
            $.notify({ icon: "fas fa-check", message: "Completed copy" }, { type: "success", placement: { from: "bottom", align: "center" } });

            ValidateAndSearch();
        },
        error: err => {
            //ERROR
            // @ts-ignore
            $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to copy" }, { type: "danger", placement: { from: "bottom", align: "center" } });
            console.log(err);
        }
    });
});

//Massive action Delete
$("#examples-example-massive-action-delete").on("click", function (e) {
    //There are two deletion types, All and JustChecked
    let DeleteType: string = "";
    let Body: Ajax = {};

    if ($("#examples-example-copy-rows-all-checkbox").is(":checked")) {
        DeleteType = "All";
    }
    else {
        DeleteType = "JustChecked";
        let CheckedRows = new Array();

        if (ViewToggler == "Table") {
            $("tr td div input.example-table-checkbox-for-row:checked").each(function () {
                CheckedRows.push($(this).val());
            });
        }
        else {
            $("div .list-row-checked").each(function () {
                //With .next() we access to input type hidden
                CheckedRows.push($(this).next().val());
            });
        }
        Body = {
            AjaxForString: CheckedRows.toString()
        };
    }

    ExampleModel.DeleteManyOrAll(DeleteType, Body).subscribe({
        next: newrow => {
        },
        complete: () => {
            //SUCCESS
            // @ts-ignore
            $.notify({ icon: "fas fa-check", message: "Completed deletion" }, { type: "success", placement: { from: "bottom", align: "center" } });

            ValidateAndSearch();
        },
        error: err => {
            //ERROR
            // @ts-ignore
            $.notify({ icon: "fas fa-exclamation-triangle", message: "There was an error while trying to delete" }, { type: "danger", placement: { from: "bottom", align: "center" } });
            console.log(err);
        }
    });
});