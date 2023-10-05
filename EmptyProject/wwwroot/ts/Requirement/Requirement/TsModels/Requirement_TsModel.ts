import * as Rx from "rxjs";
import { ajax } from "rxjs/ajax";
import { Ajax } from "../../../Library/Ajax";
import { RequirementChangehistoryModel } from "../../RequirementChangehistory/TsModels/RequirementChangehistory_TsModel";import { RequirementFileModel } from "../../RequirementFile/TsModels/RequirementFile_TsModel";
import { requirementSelectAllPaged } from "../DTOs/requirementSelectAllPaged";

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

//11 fields | Sub-models: 2 models  | Last modification on: 27/12/2022 20:52:58 | Stack: 9

export class RequirementModel {

    //Fields
    RequirementId?: number;
	Active?: boolean;
	DateTimeCreation?: string | string[] | number | undefined;
	DateTimeLastModification?: string | string[] | number | undefined;
	UserCreationId?: number;
	UserLastModificationId?: number;
	Title?: string | string[] | number | undefined;
	Body?: string | string[] | number | undefined;
	RequirementStateId?: number;
	RequirementPriorityId?: number;
	UserEmployeeId?: number;
    lstRequirementChangehistoryModel?: RequirementChangehistoryModel[] | undefined;
    lstRequirementFileModel?: RequirementFileModel[] | undefined;
    UserCreationIdFantasyName?: string | string[] | number | undefined;
    UserLastModificationIdFantasyName?: string | string[] | number | undefined;
    RequirementStateIdName?: string | string[] | number | undefined;
    RequirementPriorityIdName?: string | string[] | number | undefined;
    UserEmployeeIdFantasyName?: string | string[] | number | undefined;
    

    //Queries
    static Select1ByRequirementId(RequirementId: number) {
        let URL = "/api/Requirement/Requirement/1/Select1ByRequirementIdToJSON/" + RequirementId;
        return Rx.from(ajax(URL));
    }

    static SelectAll() {
        let URL = "/api/Requirement/Requirement/1/SelectAllToJSON"
        return Rx.from(ajax(URL));
    }
    
    static SelectAllPaged(requirementSelectAllPaged: requirementSelectAllPaged) {
        let URL = "/api/Requirement/Requirement/1/SelectAllPagedToJSON";
        let Body = {
            QueryString: requirementSelectAllPaged.QueryString,
            ActualPageNumber: requirementSelectAllPaged.ActualPageNumber,
            RowsPerPage: requirementSelectAllPaged.RowsPerPage,
            SorterColumn: requirementSelectAllPaged.SorterColumn,
            SortToggler: requirementSelectAllPaged.SortToggler,
            RowCount: requirementSelectAllPaged.TotalRows,
            TotalPages: requirementSelectAllPaged.TotalPages,
            lstRequirementModel: requirementSelectAllPaged.lstRequirementModel
        };
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }

    //Non-Queries
    static DeleteByRequirementId(RequirementId: number | string | string[] | undefined) {
        let URL = "/api/Requirement/Requirement/1/DeleteByRequirementId/" + RequirementId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.delete(URL, Header));
    }

    static DeleteManyOrAll(DeleteType: string, Body: Ajax) {
        let URL = "/api/Requirement/Requirement/1/DeleteManyOrAll/" + DeleteType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
    
    static CopyByRequirementId(RequirementId: string | number | string[] | undefined) {
        let URL = "/api/Requirement/Requirement/1/CopyByRequirementId/" + RequirementId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        let Body: any = {};
        return Rx.from(ajax.post(URL, Body, Header));
    }

    static CopyManyOrAll(CopyType: string, Body: Ajax) {
        let URL = "/api/Requirementing/Requirement/1/CopyManyOrAll/" + CopyType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
}