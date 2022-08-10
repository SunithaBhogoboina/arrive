import { ColDef, GridOptions } from "ag-grid-community";
//import { copyElements } from "../copyElements";


const defaultColumnDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true
}
const columnDefs = [
    {
        headerName: 'Name',
        field: 'name',
        width: 1050,
        autoHeight: true,
        pinned: true
    },
    {
        headerName: 'Passion',
        field: 'passion',
        width: 1050,
        autoHeight: true
    },
    {
        headerName: 'Hobbies',
        field: 'hobbies',
        width: 1050,
        autoHeight: true
    },
    {
        headerName: 'From',
        field: 'from',
        width: 1050,
        autoHeight: true
    }
];

// export const getColumnDefs = (): any => {
//     return copyElements(columnDefs, defaultColumnDef);
// }

const getUserHobbiesGridOptions = (): GridOptions => {
    return {
        frameworkComponents: {
        },
        headerHeight: 45,
        rowHeight: 250,
        defaultColDef: defaultColumnDef,
        columnDefs: columnDefs,
        suppressContextMenu: true
    }
}

export default getUserHobbiesGridOptions;

