import * as Rx from "rxjs";
import { ajax } from "rxjs/ajax";
import { Ajax } from "../../../Library/Ajax";
import { requirementfileSelectAllPaged } from "../DTOs/requirementfileSelectAllPaged";


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

//8 fields | Sub-models: 0 models  | Last modification on: 29/12/2022 10:16:50 | Stack: 9

export class RequirementFileModel {

    //Fields
    RequirementFileId?: number;
	Active?: boolean;
	DateTimeCreation?: string | string[] | number | undefined;
	DateTimeLastModification?: string | string[] | number | undefined;
	UserCreationId?: number;
	UserLastModificationId?: number;
	RequirementId?: number;
    FilePath?: string | string[] | number | undefined;
    UserCreationIdFantasyName?: string | string[] | number | undefined;
    UserLastModificationIdFantasyName?: string | string[] | number | undefined;
    

    //Queries
    static Select1ByRequirementFileId(RequirementFileId: number) {
        let URL = "/api/Requirement/RequirementFile/1/Select1ByRequirementFileIdToJSON/" + RequirementFileId;
        return Rx.from(ajax(URL));
    }

    static SelectAll() {
        let URL = "/api/Requirement/RequirementFile/1/SelectAllToJSON"
        return Rx.from(ajax(URL));
    }
    
    static SelectAllPaged(requirementfileSelectAllPaged: requirementfileSelectAllPaged, RequirementId: any) {
        let URL = "/api/Requirement/RequirementFile/1/SelectAllPagedToJSON/" + RequirementId;
        let Body = {
            requirementfileQueryString: requirementfileSelectAllPaged.requirementfileQueryString,
            requirementfileActualPageNumber: requirementfileSelectAllPaged.requirementfileActualPageNumber,
            requirementfileRowsPerPage: requirementfileSelectAllPaged.requirementfileRowsPerPage,
            requirementfileSorterColumn: requirementfileSelectAllPaged.requirementfileSorterColumn,
            requirementfileSortToggler: requirementfileSelectAllPaged.requirementfileSortToggler,
            requirementfileRowCount: requirementfileSelectAllPaged.requirementfileTotalRows,
            requirementfileTotalPages: requirementfileSelectAllPaged.requirementfileTotalPages,
            lstRequirementFileModel: requirementfileSelectAllPaged.lstRequirementFileModel
        };
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }

    //Non-Queries
    static DeleteByRequirementFileId(RequirementFileId: number | string | string[] | undefined) {
        let URL = "/api/Requirement/RequirementFile/1/DeleteByRequirementFileId/" + RequirementFileId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.delete(URL, Header));
    }

    static DeleteManyOrAll(DeleteType: string, Body: Ajax) {
        let URL = "/api/Requirement/RequirementFile/1/DeleteManyOrAll/" + DeleteType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
    
    static CopyByRequirementFileId(RequirementFileId: string | number | string[] | undefined) {
        let URL = "/api/Requirement/RequirementFile/1/CopyByRequirementFileId/" + RequirementFileId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        let Body: any = {};
        return Rx.from(ajax.post(URL, Body, Header));
    }

    static CopyManyOrAll(CopyType: string, Body: Ajax) {
        let URL = "/api/RequirementFileing/RequirementFile/1/CopyManyOrAll/" + CopyType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
}