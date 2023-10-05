import * as Rx from "rxjs";
import { ajax } from "rxjs/ajax";
import { Ajax } from "../../../Library/Ajax";
import { requirementchangehistorySelectAllPaged } from "../DTOs/requirementchangehistorySelectAllPaged";


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

//9 fields | Sub-models: 0 models  | Last modification on: 25/12/2022 18:01:44 | Stack: 9

export class RequirementChangehistoryModel {

    //Fields
    RequirementChangehistoryId?: number;
	Active?: boolean;
	DateTimeCreation?: string | string[] | number | undefined;
	DateTimeLastModification?: string | string[] | number | undefined;
	UserCreationId?: number;
	UserLastModificationId?: number;
	RequirementId?: number;
	RequirementStateId?: number;
    RequirementPriorityId?: number;
    UserCreationIdFantasyName?: string | string[] | number | undefined;
    UserLastModificationIdFantasyName?: string | string[] | number | undefined;
    RequirementStateIdName?: string | string[] | number | undefined;
    RequirementPriorityIdName?: string | string[] | number | undefined;
    

    //Queries
    static Select1ByRequirementChangehistoryId(RequirementChangehistoryId: number) {
        let URL = "/api/Requirement/RequirementChangehistory/1/Select1ByRequirementChangehistoryIdToJSON/" + RequirementChangehistoryId;
        return Rx.from(ajax(URL));
    }

    static SelectAll() {
        let URL = "/api/Requirement/RequirementChangehistory/1/SelectAllToJSON"
        return Rx.from(ajax(URL));
    }
    
    static SelectAllPaged(requirementchangehistorySelectAllPaged: requirementchangehistorySelectAllPaged, RequirementId: any) {
        let URL = "/api/Requirement/RequirementChangehistory/1/SelectAllPagedToJSON/" + RequirementId;
        let Body = {
            requirementchangehistoryQueryString: requirementchangehistorySelectAllPaged.requirementchangehistoryQueryString,
            requirementchangehistoryActualPageNumber: requirementchangehistorySelectAllPaged.requirementchangehistoryActualPageNumber,
            requirementchangehistoryRowsPerPage: requirementchangehistorySelectAllPaged.requirementchangehistoryRowsPerPage,
            requirementchangehistorySorterColumn: requirementchangehistorySelectAllPaged.requirementchangehistorySorterColumn,
            requirementchangehistorySortToggler: requirementchangehistorySelectAllPaged.requirementchangehistorySortToggler,
            requirementchangehistoryRowCount: requirementchangehistorySelectAllPaged.requirementchangehistoryTotalRows,
            requirementchangehistoryTotalPages: requirementchangehistorySelectAllPaged.requirementchangehistoryTotalPages,
            lstRequirementChangehistoryModel: requirementchangehistorySelectAllPaged.lstRequirementChangehistoryModel
        };
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }

    //Non-Queries
    static DeleteByRequirementChangehistoryId(RequirementChangehistoryId: number | string | string[] | undefined) {
        let URL = "/api/Requirement/RequirementChangehistory/1/DeleteByRequirementChangehistoryId/" + RequirementChangehistoryId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.delete(URL, Header));
    }

    static DeleteManyOrAll(DeleteType: string, Body: Ajax) {
        let URL = "/api/Requirement/RequirementChangehistory/1/DeleteManyOrAll/" + DeleteType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
    
    static CopyByRequirementChangehistoryId(RequirementChangehistoryId: string | number | string[] | undefined) {
        let URL = "/api/Requirement/RequirementChangehistory/1/CopyByRequirementChangehistoryId/" + RequirementChangehistoryId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        let Body: any = {};
        return Rx.from(ajax.post(URL, Body, Header));
    }

    static CopyManyOrAll(CopyType: string, Body: Ajax) {
        let URL = "/api/RequirementChangehistorying/RequirementChangehistory/1/CopyManyOrAll/" + CopyType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
}