import React, { useMemo, useState } from "react";

import { useForm } from "react-hook-form";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import { DatePicker } from "@progress/kendo-react-dateinputs";

// import axios from "axios";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function Table1() {
  function getData() {
    return [
      {
        broker: "wells_fargo",
        account_type: "9Z",
        current_balance: 96258,
        open_trade_equity: 746593.14,
        account_number: "R0267",
        office_number: "745",
        valuation_date: "2022-02-17T00:00:00",
        lending_facility: "BBH",
        inserted: false,
        meta_data: {
          applied_exclusions: [],
          overrides: {
            current_balance: {
              old_value: 95261.21,
              override_expiry_date: null,
              override_start_date: "2022-02-17",
              comment: null,
            },
            open_trade_equity: {
              old_value: 746593.14,
              override_expiry_date: null,
              override_start_date: "2022-02-17",
              comment: null,
            },
          },
        },
        excluded: false,
      },
      {
        broker: "wells_fargo",
        account_type: "9A",
        current_balance: 96258,
        open_trade_equity: 746593.14,
        account_number: "R0267",
        office_number: "745",
        valuation_date: "2022-02-17T00:00:00",
        lending_facility: "AAH",
        inserted: false,
        meta_data: {
          applied_exclusions: [],
          overrides: {
            current_balance: {
              old_value: 95261.21,
              override_expiry_date: null,
              override_start_date: "2022-02-17",
              comment: null,
            },
            open_trade_equity: {
              old_value: 746593.14,
              override_expiry_date: null,
              override_start_date: "2022-02-17",
              comment: null,
            },
          },
        },
        excluded: false,
      },
      {
        broker: "wells_fargo",
        account_type: "8T",
        current_balance: 96258,
        open_trade_equity: 746593.14,
        account_number: "R0267",
        office_number: "745",
        valuation_date: "2022-02-17T00:00:00",
        lending_facility: "CCH",
        inserted: false,
        meta_data: {
          applied_exclusions: [],
          overrides: {
            current_balance: {
              old_value: 95261.21,
              override_expiry_date: null,
              override_start_date: "2022-02-17",
              comment: null,
            },
            open_trade_equity: {
              old_value: 746593.14,
              override_expiry_date: null,
              override_start_date: "2022-02-17",
              comment: null,
            },
          },
        },
        excluded: false,
      },
      {
        broker: "wells_fargo",
        account_type: "9Z",
        current_balance: 96258,
        open_trade_equity: 746593.14,
        account_number: "R0267",
        office_number: "745",
        valuation_date: "2022-02-17T00:00:00",
        lending_facility: "BBH",
        inserted: false,
        meta_data: {
          applied_exclusions: [],
          overrides: {
            current_balance: {
              old_value: 95261.21,
              override_expiry_date: null,
              override_start_date: "2022-02-17",
              comment: null,
            },
            open_trade_equity: {
              old_value: 746593.14,
              override_expiry_date: null,
              override_start_date: "2022-02-17",
              comment: null,
            },
          },
        },
        excluded: false,
      },
    ];
  }
  const model = JSON.parse('{ "valuation_date": "2022-02-17" }');
  const [rowData, setRowData] = useState(getData());
  // const [rowData, setRowData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [accountType, setAccountType] = useState("");
  const [lendingFacility, setLendingFacility] = useState("");
  const [valuationDate, setValuationDate] = useState("");
  const [tableViewId, setTableViewId] = useState("");
  const [modelState, setModelState] = useState(model);
  const { register, handleSubmit } = useForm();
  const dateRegex = /T[0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]{1,3})?Z/;
  
  const handleDateChange = (event) => {
    setModelState((prevState) => {
      prevState.valuation_date = event.target.value;
      return { ...prevState };
    });
  };

  const onSubmit = (data) => {
    const formatDate = JSON.stringify(data).replace(dateRegex, "");
    alert(formatDate);
  };

  const [columnDefs, setColumnDefs] = useState([
    { field: "broker", headerName: "Broker", minWidth: 140 },
    {
      field: "account_type",
      headerName: "Account Type",
      minWidth: 150,
    },
    { field: "current_balance", headerName: "Current Balance", minWidth: 160 },
    {
      field: "open_trade_equity",
      headerName: "Open Trade Equity",
      minWidth: 160,
    },
    {
      field: "account_number",
      headerName: "Account Number",
      minWidth: 180,
    },
   
    {
      field: "valuation_date",
      headerName: "Valuation Date",
      minWidth: 180,
    },
    {
      field: "office_number",
      headerName: "Office Number",
      minWidth: 150,
    },
    {
      field: "lending_facility",
      headerName: "Lending Facility",
      minWidth: 150,
    },
    
    {
      field: "meta_data.overrides.open_trade_equity.comment",
      headerName: "Comment",
      minWidth: 130,
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 150,
      filter: true,
      sortable: true,
    };
  }, []);

  function Loading() {
    if (isLoading) {
      return (
        <div className="loader-parent">
          <span className="spinner"></span>
        </div>
      );
    }
    return (
      <div className="loader-parent">
        <span></span>
      </div>
    );
  }

  return (
    <div className="vertical-inline-flex grid-margin">
      
      <div className="table-filter">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="horizontal-inline-flex justify--flex-start align--center"
        >
          <div className="vertical-inline-flex">
            <Loading
              className="horizontal-inline-flex justify--flex-start align--center"
              isLoading={false}
            />
          </div>
          <div className="if-col hidden">
            <p className="font-s-13">Data Type*</p>
            <div className="k-dropdownlist">
              <select
                title="Data Type"
                {...register("table_view_id")}
                className="input bg--white color--black"
                onChange={(e) => setTableViewId(e.target.value)}
              >
                <option value="1">
                  1
                </option>
              </select>
            </div>
          </div>
          <div className="if-col min-w-180 margin-r-20">
            <label className="vertical-inline-flex">
              <p className="font-s-13">Valuation Date*</p>
              <DatePicker
                {...register("valuation_date")}
                value={new Date(modelState.valuation_date)}
                onChange={handleDateChange}
              />
            </label>
          </div>
          <div className="if-col min-w-180 margin-r-20">
            <p className="font-s-13">Account Type</p>
            <div className="k-dropdownlist w-100">
              <select
                title="Account Type"
                {...register("table_filters.account_type")}
                className="input bg--white color--black w-100"
                onChange={(e) => setAccountType(e.target.value)}
              >
                <option value=""></option>
                <option value="9Z">9Z</option>
              </select>
            </div>
          </div>
          <div className="if-col min-w-180 margin-r-20">
            <p className="font-s-13">Lending Facility</p>
            <div className="k-dropdownlist w-100">
              <select
                title="Lending Facility"
                {...register("table_filters.lending_facility")}
                className="input bg--white color--black w-100"
                onChange={(e) => setLendingFacility(e.target.value)}

                // name="lending_facility"
                // onChange={handleLendingFacilityChange}
                // value={lending_facility}
              >
                <option value=""></option>
                <option value="BBH">BBH</option>
              </select>
            </div>
          </div>
          <div className="if-col">
            <p className="font-s-13"> &nbsp; </p>
            <input
              type="submit"
              value="Search"
              className="button bg--blue color--white"
            />
          </div>
        </form>
      </div>
      <div className="ag-theme-alpine grid table-1">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          enableRangeSelection={true}
          rowSelection={"multiple"}
          // onGridReady={onGridReady}
        ></AgGridReact>
      </div>
    </div>
  );
}
