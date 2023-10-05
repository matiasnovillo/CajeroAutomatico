import { ExampleModel } from "../TsModels/Example_TsModel";

export class exampleSelectAllPaged {
    QueryString?: string;
    ActualPageNumber?: number;
    RowsPerPage?: number;
    SorterColumn?: string;
    SortToggler?: boolean;
    TotalRows?: number;
    TotalPages?: number;
    lstExampleModel?: ExampleModel[] | undefined;
}