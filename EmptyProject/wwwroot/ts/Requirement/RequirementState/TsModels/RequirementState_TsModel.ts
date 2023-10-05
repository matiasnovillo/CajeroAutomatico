import * as Rx from "rxjs";
import { ajax } from "rxjs/ajax";
import { Ajax } from "../../../Library/Ajax";
import { RequirementModel } from "../../Requirement/TsModels/Requirement_TsModel";import { RequirementChangehistoryModel } from "../../RequirementChangehistory/TsModels/RequirementChangehistory_TsModel";
import { requirementstateSelectAllPaged } from "../DTOs/requirementstateSelectAllPaged";

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

//7 fields | Sub-models: 2 models  | Last modification on: 25/12/2022 18:16:36 | Stack: 9

export class RequirementStateModel {

    //Fields
    RequirementStateId?: number;
	Active?: boolean;
	DateTimeCreation?: string | string[] | number | undefined;
	DateTimeLastModification?: string | string[] | number | undefined;
	UserCreationId?: number;
	UserLastModificationId?: number;
	Name?: string | string[] | number | undefined;
    lstRequirementModel?: RequirementModel[] | undefined;
    lstRequirementChangehistoryModel?: RequirementChangehistoryModel[] | undefined;
    UserCreationIdFantasyName?: string | string[] | number | undefined;
    UserLastModificationIdFantasyName?: string | string[] | number | undefined;

    //Queries
    static Select1ByRequirementStateId(RequirementStateId: number) {
        let URL = "/api/Requirement/RequirementState/1/Select1ByRequirementStateIdToJSON/" + RequirementStateId;
        return Rx.from(ajax(URL));
    }

    static SelectAll() {
        let URL = "/api/Requirement/RequirementState/1/SelectAllToJSON"
        return Rx.from(ajax(URL));
    }
    
    static SelectAllPaged(requirementstateSelectAllPaged: requirementstateSelectAllPaged) {
        let URL = "/api/Requirement/RequirementState/1/SelectAllPagedToJSON";
        let Body = {
            QueryString: requirementstateSelectAllPaged.QueryString,
            ActualPageNumber: requirementstateSelectAllPaged.ActualPageNumber,
            RowsPerPage: requirementstateSelectAllPaged.RowsPerPage,
            SorterColumn: requirementstateSelectAllPaged.SorterColumn,
            SortToggler: requirementstateSelectAllPaged.SortToggler,
            RowCount: requirementstateSelectAllPaged.TotalRows,
            TotalPages: requirementstateSelectAllPaged.TotalPages,
            lstRequirementStateModel: requirementstateSelectAllPaged.lstRequirementStateModel
        };
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }

    //Non-Queries
    static DeleteByRequirementStateId(RequirementStateId: number | string | string[] | undefined) {
        let URL = "/api/Requirement/RequirementState/1/DeleteByRequirementStateId/" + RequirementStateId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.delete(URL, Header));
    }

    static DeleteManyOrAll(DeleteType: string, Body: Ajax) {
        let URL = "/api/Requirement/RequirementState/1/DeleteManyOrAll/" + DeleteType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
    
    static CopyByRequirementStateId(RequirementStateId: string | number | string[] | undefined) {
        let URL = "/api/Requirement/RequirementState/1/CopyByRequirementStateId/" + RequirementStateId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        let Body: any = {};
        return Rx.from(ajax.post(URL, Body, Header));
    }

    static CopyManyOrAll(CopyType: string, Body: Ajax) {
        let URL = "/api/RequirementStateing/RequirementState/1/CopyManyOrAll/" + CopyType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
}