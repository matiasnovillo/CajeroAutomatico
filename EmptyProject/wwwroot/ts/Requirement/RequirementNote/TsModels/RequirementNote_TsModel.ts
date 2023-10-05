import * as Rx from "rxjs";
import { ajax } from "rxjs/ajax";
import { Ajax } from "../../../Library/Ajax";
import { requirementnoteSelectAllPaged } from "../DTOs/requirementnoteSelectAllPaged";


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

//9 fields | Sub-models: 0 models  | Last modification on: 28/12/2022 17:28:12 | Stack: 9

export class RequirementNoteModel {

    //Fields
    RequirementNoteId?: number;
	Active?: boolean;
	DateTimeCreation?: string | string[] | number | undefined;
	DateTimeLastModification?: string | string[] | number | undefined;
	UserCreationId?: number;
	UserLastModificationId?: number;
	Title?: string | string[] | number | undefined;
	Body?: string | string[] | number | undefined;
	RequirementId?: number;
    UserCreationIdFantasyName?: string | string[] | number | undefined;
    UserLastModificationIdFantasyName?: string | string[] | number | undefined;

    //Queries
    static Select1ByRequirementNoteId(RequirementNoteId: number) {
        let URL = "/api/Requirement/RequirementNote/1/Select1ByRequirementNoteIdToJSON/" + RequirementNoteId;
        return Rx.from(ajax(URL));
    }

    static SelectAll() {
        let URL = "/api/Requirement/RequirementNote/1/SelectAllToJSON"
        return Rx.from(ajax(URL));
    }
    
    static SelectAllPaged(requirementnoteSelectAllPaged: requirementnoteSelectAllPaged, RequirementId: any) {
        let URL = "/api/Requirement/RequirementNote/1/SelectAllPagedToJSON/" + RequirementId;
        let Body = {
            QueryString: requirementnoteSelectAllPaged.QueryString,
            ActualPageNumber: requirementnoteSelectAllPaged.ActualPageNumber,
            RowsPerPage: requirementnoteSelectAllPaged.RowsPerPage,
            SorterColumn: requirementnoteSelectAllPaged.SorterColumn,
            SortToggler: requirementnoteSelectAllPaged.SortToggler,
            RowCount: requirementnoteSelectAllPaged.TotalRows,
            TotalPages: requirementnoteSelectAllPaged.TotalPages,
            lstRequirementNoteModel: requirementnoteSelectAllPaged.lstRequirementNoteModel
        };
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }

    //Non-Queries
    static DeleteByRequirementNoteId(RequirementNoteId: number | string | string[] | undefined) {
        let URL = "/api/Requirement/RequirementNote/1/DeleteByRequirementNoteId/" + RequirementNoteId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.delete(URL, Header));
    }

    static DeleteManyOrAll(DeleteType: string, Body: Ajax) {
        let URL = "/api/Requirement/RequirementNote/1/DeleteManyOrAll/" + DeleteType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
    
    static CopyByRequirementNoteId(RequirementNoteId: string | number | string[] | undefined) {
        let URL = "/api/Requirement/RequirementNote/1/CopyByRequirementNoteId/" + RequirementNoteId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        let Body: any = {};
        return Rx.from(ajax.post(URL, Body, Header));
    }

    static CopyManyOrAll(CopyType: string, Body: Ajax) {
        let URL = "/api/RequirementNoteing/RequirementNote/1/CopyManyOrAll/" + CopyType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
}