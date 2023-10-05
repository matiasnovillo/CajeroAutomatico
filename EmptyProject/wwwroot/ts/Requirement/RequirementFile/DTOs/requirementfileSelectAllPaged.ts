import { RequirementFileModel } from "../TsModels/RequirementFile_TsModel";

export class requirementfileSelectAllPaged {
    requirementfileQueryString?: string;
    requirementfileActualPageNumber?: number;
    requirementfileRowsPerPage?: number;
    requirementfileSorterColumn?: string;
    requirementfileSortToggler?: boolean;
    requirementfileTotalRows?: number;
    requirementfileTotalPages?: number;
    lstRequirementFileModel?: RequirementFileModel[] | undefined;
}