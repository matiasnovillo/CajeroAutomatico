import * as Rx from "rxjs";
import { ajax } from "rxjs/ajax";
import { Ajax } from "../../../Library/Ajax";
import { employeeSelectAllPaged } from "../DTOs/employeeSelectAllPaged";


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

//9 fields | Sub-models: 0 models  | Last modification on: 29/07/2023 20:34:31 | Stack: 9

export class EmployeeModel {

    //Fields
    EmployeeId?: number;
	Active?: boolean;
	DateTimeCreation?: string | string[] | number | undefined;
	DateTimeLastModification?: string | string[] | number | undefined;
	UserCreationId?: number;
	UserLastModificationId?: number;
	Name?: string | string[] | number | undefined;
	Description?: string | string[] | number | undefined;
	WebSite?: string | string[] | number | undefined;
    

    //Queries
    static Select1ByEmployeeId(EmployeeId: number) {
        let URL = "/api/Example/Employee/1/Select1ByEmployeeIdToJSON/" + EmployeeId;
        return Rx.from(ajax(URL));
    }

    static SelectAll() {
        let URL = "/api/Example/Employee/1/SelectAllToJSON"
        return Rx.from(ajax(URL));
    }
    
    static SelectAllPaged(employeeSelectAllPaged: employeeSelectAllPaged) {
        let URL = "/api/Example/Employee/1/SelectAllPagedToJSON";
        let Body = {
            QueryString: employeeSelectAllPaged.QueryString,
            ActualPageNumber: employeeSelectAllPaged.ActualPageNumber,
            RowsPerPage: employeeSelectAllPaged.RowsPerPage,
            SorterColumn: employeeSelectAllPaged.SorterColumn,
            SortToggler: employeeSelectAllPaged.SortToggler,
            RowCount: employeeSelectAllPaged.TotalRows,
            TotalPages: employeeSelectAllPaged.TotalPages,
            lstEmployeeModel: employeeSelectAllPaged.lstEmployeeModel
        };
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }

    //Non-Queries
    static DeleteByEmployeeId(EmployeeId: number | string | string[] | undefined) {
        let URL = "/api/Example/Employee/1/DeleteByEmployeeId/" + EmployeeId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.delete(URL, Header));
    }

    static DeleteManyOrAll(DeleteType: string, Body: Ajax) {
        let URL = "/api/Example/Employee/1/DeleteManyOrAll/" + DeleteType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
    
    static CopyByEmployeeId(EmployeeId: string | number | string[] | undefined) {
        let URL = "/api/Example/Employee/1/CopyByEmployeeId/" + EmployeeId;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        let Body: any = {};
        return Rx.from(ajax.post(URL, Body, Header));
    }

    static CopyManyOrAll(CopyType: string, Body: Ajax) {
        let URL = "/api/Employeeing/Employee/1/CopyManyOrAll/" + CopyType;
        let Header: any = {
            "Accept": "application/json",
            "Content-Type": "application/json; charset=utf-8"
        };
        return Rx.from(ajax.post(URL, Body, Header));
    }
}