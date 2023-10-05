import { RequirementStateModel } from "../TsModels/RequirementState_TsModel";

export class requirementstateSelectAllPaged {
    QueryString?: string;
    ActualPageNumber?: number;
    RowsPerPage?: number;
    SorterColumn?: string;
    SortToggler?: boolean;
    TotalRows?: number;
    TotalPages?: number;
    lstRequirementStateModel?: RequirementStateModel[] | undefined;
}