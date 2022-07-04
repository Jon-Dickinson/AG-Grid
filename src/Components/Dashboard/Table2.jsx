import React, { useEffect, useMemo, useState } from "react";

import { useForm } from "react-hook-form";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-enterprise";
import { DatePicker } from "@progress/kendo-react-dateinputs";

// import axios from "axios";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

export default function Table2() {
  function getData() {
    return [
      {
        amount: 454232,
        currency_iso: "USD",
        account_number: "0c77cb116d4a433d8ab48533935bb8a2",
        valuation_date: "2022-02-17",
        lending_facility: "BBH",
        inserted: true,
        meta_data: {
          insert: {
            insert_id: 19,
            insert_start_date: "2022-02-16",
            insert_end_date: "2022-06-30",
            comment: "test",
          },
          applied_exclusions: [],
          overrides: {
            amount: {
              old_value: "3",
              override_expiry_date: null,
              override_start_date: "2022-02-16",
              comment: null,
            },
          },
        },
        excluded: false,
      },
      {
        amount: 454232,
        currency_iso: "USD",
        account_number: "0c77cb116d4a433d8ab48533935bb8a2",
        valuation_date: "2022-02-17",
        lending_facility: "BBH",
        inserted: true,
        meta_data: {
          insert: {
            insert_id: 19,
            insert_start_date: "2022-02-16",
            insert_end_date: "2022-06-30",
            comment: "test",
          },
          applied_exclusions: [],
          overrides: {
            amount: {
              old_value: "3",
              override_expiry_date: null,
              override_start_date: "2022-02-16",
              comment: null,
            },
          },
        },
        excluded: false,
      },
      {
        amount: 454232,
        currency_iso: "USD",
        account_number: "0c77cb116d4a433d8ab48533935bb8a2",
        valuation_date: "2022-02-17",
        lending_facility: "BBH",
        inserted: true,
        meta_data: {
          insert: {
            insert_id: 19,
            insert_start_date: "2022-02-16",
            insert_end_date: "2022-06-30",
            comment: "test",
          },
          applied_exclusions: [],
          overrides: {
            amount: {
              old_value: "3",
              override_expiry_date: null,
              override_start_date: "2022-02-16",
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
  const [currency, setCurrency] = useState("");
  const [lendingFacility, setLendingFacility] = useState("");
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
    { field: "amount", headerName: "Amount", minWidth: 120 },
    { field: "currency_iso", headerName: "Currency ISO", minWidth: 140 },
    { field: "account_number", headerName: "Account Number", minWidth: 200 },
    { field: "valuation_date", headerName: "Valuation Date", minWidth: 160 },
    {
      field: "lending_facility",
      headerName: "Lending Facility",
      minWidth: 180,
    },
    { field: "inserted" },
    { field: "excluded" },
    { field: "meta_data.insert.comment", headerName: "Comment", minWidth: 90 },
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
              >
                <option value="2">
                  2
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
            <p className="font-s-13">Currency</p>
            <div className="k-dropdownlist w-100">
              <select
                title="Currency"
                {...register("table_filters.currency_iso")}
                className="input bg--white color--black"
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value=""></option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>
          <div className="if-col min-w-180 margin-r-20">
            <p className="font-s-13">Lending Facility</p>
            <div className="k-dropdownlist w-100">
              <select
                title="Data Type"
                {...register("table_filters.lending_facility")}
                className="input bg--white color--black w-100"
                onChange={(e) => setLendingFacility(e.target.value)}
              >
                <option value=""></option>
                <option value="BBH">BBH</option>
                <option value="CCA">CCA</option>
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
      <div className="ag-theme-alpine grid table-2">
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          enableRangeSelection={true}
          rowSelection={"multiple"}
        ></AgGridReact>
      </div>
    </div>
  );
}
