import { RequirementChangehistoryModel } from "../TsModels/RequirementChangehistory_TsModel";

export class requirementchangehistorySelectAllPaged {
    requirementchangehistoryQueryString?: string;
    requirementchangehistoryActualPageNumber?: number;
    requirementchangehistoryRowsPerPage?: number;
    requirementchangehistorySorterColumn?: string;
    requirementchangehistorySortToggler?: boolean;
    requirementchangehistoryTotalRows?: number;
    requirementchangehistoryTotalPages?: number;
    lstRequirementChangehistoryModel?: RequirementChangehistoryModel[] | undefined;
}