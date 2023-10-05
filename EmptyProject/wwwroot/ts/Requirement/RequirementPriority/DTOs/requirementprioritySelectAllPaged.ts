import { RequirementPriorityModel } from "../TsModels/RequirementPriority_TsModel";

export class requirementprioritySelectAllPaged {
    QueryString?: string;
    ActualPageNumber?: number;
    RowsPerPage?: number;
    SorterColumn?: string;
    SortToggler?: boolean;
    TotalRows?: number;
    TotalPages?: number;
    lstRequirementPriorityModel?: RequirementPriorityModel[] | undefined;
}