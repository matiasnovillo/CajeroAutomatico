import { RequirementModel } from "../TsModels/Requirement_TsModel";

export class requirementSelectAllPaged {
    QueryString?: string;
    ActualPageNumber?: number;
    RowsPerPage?: number;
    SorterColumn?: string;
    SortToggler?: boolean;
    TotalRows?: number;
    TotalPages?: number;
    lstRequirementModel?: RequirementModel[] | undefined;
}