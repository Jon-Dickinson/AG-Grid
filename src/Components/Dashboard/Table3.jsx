import React, { useCallback, useMemo, useRef, useState } from "react";
import { render } from "react-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import ColourCellRenderer from "../Custom/ColourCellRenderer";

const colors = ["Red", "Green", "Blue"];

const data = Array.from(Array(20).keys()).map((val, index) => ({
  color1: colors[index % 3],
  color2: colors[index % 3],
  color3: colors[index % 3],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}));

export default function Table3() {
  
  const [rowData, setRowData] = useState(data);
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: "Text Editor",
      field: "color1",
      cellRenderer: ColourCellRenderer,
      cellEditor: "agTextCellEditor",
    },
    {
      headerName: "Select Editor",
      field: "color2",
      cellRenderer: ColourCellRenderer,
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: colors,
      },
    },
    {
      headerName: "Rich Select Editor",
      field: "color3",
      cellRenderer: ColourCellRenderer,
      cellEditor: "agRichSelectCellEditor",
      cellEditorPopup: true,
      cellEditorParams: {
        values: colors,
        cellRenderer: ColourCellRenderer,
      },
    },
    {
      headerName: "Large Text Editor",
      field: "description",
      cellEditorPopup: true,
      cellEditor: "agLargeTextCellEditor",
      flex: 2,
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      resizable: true,
      editable: true,
    };
  }, []);

  return (
    <div className="vertical-inline-flex grid-margin">
      <div className="table-filter"></div>
      <div className="ag-theme-alpine grid table-2">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        ></AgGridReact>
      </div>
    </div>
  );
}
