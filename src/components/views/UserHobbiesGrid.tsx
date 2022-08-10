import React, {useEffect, useState} from "react";
import {GridApi, GridOptions, GridReadyEvent} from "ag-grid-community";
import {AgGridReact} from "ag-grid-react";
import getUserHobbiesGridOptions from '../userHobbiesGridOptions';

const UserHobbiesGrid = () => {

    let gridApi: GridApi;
    const gridOptions = getUserHobbiesGridOptions();
     const onGridReady = (event: GridReadyEvent) => {
        event.api.sizeColumnsToFit();
        //gridApi.setGridApis(event.api, event.columnApi);
        gridApi = event.api;
    } 
    /* <AgGridReact onGridReady={onGridReady}{...gridOptions} rowData={}> </AgGridReact> */

    const defaultColumnDef = {
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
    const rowData = [
        {name: "John", passion: "Medium", hobbies: "laying Football", from: "since 2014"},
        {name: "Peter", passion: "Medium", hobbies: "laying Football", from: "since 2014"},
        {name: "Markus", passion: "Medium", hobbies: "laying Football", from: "since 2014"}
    ];

    return (
       // <div style={{height: '30vh'}} className="ag-theme-material">
       <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            <p>Test------</p>
           <AgGridReact columnDefs={columnDefs} defaultColDef={defaultColumnDef} rowData={rowData ? rowData : []}> </AgGridReact>
        </div>
    );
}

export default UserHobbiesGrid;