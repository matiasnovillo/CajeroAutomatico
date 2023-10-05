import * as Rx from "rxjs";
import { ajax } from "rxjs/ajax";
import { Ajax } from "../../../Library/Ajax";
import { RequirementModel } from "../../Requirement/TsModels/Requirement_TsModel";import { RequirementChangehistoryModel } from "../../RequirementChangehistory/TsModels/RequirementChangehistory_TsModel";
import { requirementprioritySelectAllPaged } from "../DTOs/requirementprioritySelectAllPaged";

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

//8 fields | Sub-models: 2 models  | Last modification on: 25/12/2022 18:13:11 | Stack: 9

export class RequirementPriorityModel {

    //Fields
    RequirementPriorityId?: number;
	Active?: boolean;
	DateTimeCreation?: string | string[] | number | undefined;
	DateTimeLastModification?: string | string[] | number | undefined;
	UserCreationId?: number;
	UserLastModificationId?: number;
	Name?: string | string[] | number | undefined;
	Description?: string | string[] | number | undefined;
    lstRequirementModel?: RequirementModel[] | undefined;
    lstRequirementChangehistoryModel?: RequirementChangehistoryModel[] | undefined;
    UserCreationIdFantasyName?: string | string[] | number | undefined;
    UserLastModificationIdFantasyName?: string | string[] | number | undefined;

    //Queries
    static Select1ByRequirementPriorityId(RequirementPriorityId: number) {
        let URL = "/api/Requirement/RequirementPriority/1/Select1ByRequirementPriorityIdToJSON/" + RequirementPriorityId;
        return Rx.from(ajax(URL));
    }

    static SelectAll() {
        let URL = "/api/Requirement/RequirementPriority/1/SelectAllToJSON"
        return Rx.from(ajax(URL));
    }
    
    static SelectAllPaged(requirementprioritySelectAllPaged: requirementprioritySelectAllPaged) {
        let URL = "/api/Requirement/RequirementPriority/1/SelectAllPagedToJSON";
        let Body = {
            QueryString: requirementprioritySelectAllPaged.QueryString,
            ActualPageNumber: requirementprioritySelectAllPaged.ActualPageNumber,
            RowsPerPage: requirementprioritySelectAllPaged.RowsPerPage,
            SorterColumn: requirementprioritySelectAllPaged.SorterColumn,
            SortToggler: requirementprioritySelectAllPaged.SortToggler,
            RowCount: requirementprioritySelectAllPaged.TotalRows,
            TotalPages: requirementprioritySelectAllPaged.TotalPages,
            lstRequirementPriorityModel: requirementprioritySelectAllPaged.lstRequirementPriorityModel
        };
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }

    //Non-Queries
    static DeleteByRequirementPriorityId(RequirementPriorityId: number | string | string[] | undefined) {
        let URL = "/api/Requirement/RequirementPriority/1/DeleteByRequirementPriorityId/" + RequirementPriorityId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.delete(URL, Header));
    }

    static DeleteManyOrAll(DeleteType: string, Body: Ajax) {
        let URL = "/api/Requirement/RequirementPriority/1/DeleteManyOrAll/" + DeleteType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
    
    static CopyByRequirementPriorityId(RequirementPriorityId: string | number | string[] | undefined) {
        let URL = "/api/Requirement/RequirementPriority/1/CopyByRequirementPriorityId/" + RequirementPriorityId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        let Body: any = {};
        return Rx.from(ajax.post(URL, Body, Header));
    }

    static CopyManyOrAll(CopyType: string, Body: Ajax) {
        let URL = "/api/RequirementPrioritying/RequirementPriority/1/CopyManyOrAll/" + CopyType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
}