import { RequirementNoteModel } from "../TsModels/RequirementNote_TsModel";

export class requirementnoteSelectAllPaged {
    QueryString?: string;
    ActualPageNumber?: number;
    RowsPerPage?: number;
    SorterColumn?: string;
    SortToggler?: boolean;
    TotalRows?: number;
    TotalPages?: number;
    lstRequirementNoteModel?: RequirementNoteModel[] | undefined;
}