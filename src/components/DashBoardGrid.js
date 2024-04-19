import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import YourComponent from "./YourComponent.js";
import "../styles/dashBoardGrid.css";
import NewTaskButton from "./NewTaskButton.js";
import NewTaskButtonBlue from "./NewTaskButtonBlue.js";
import SearchIcon from "@mui/icons-material/Search";

const DashboardGrid = () => {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const onDataLoaded = (data) => {
    setRowData(data);
    setLoading(false);
    setFilteredData(data);
  };

  useEffect(() => {
    if (!searchValue) {
      setFilteredData(rowData);
    } else {
      const filteredRows = rowData.filter((row) =>
        Object.values(row).some(
          (value) =>
            typeof value === "string" &&
            value.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
      setFilteredData(filteredRows);
    }
  }, [searchValue, rowData]);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const columnDefs = [
    {
      headerName: "DATE",
      field: "requestCreated",
      width: 100,
    },
    {
      headerName: "KEYWORD",
      field: "keyWordField",
      width: 200,
    },
    {
      headerName: "COUNTRY",
      field: "countryField",
      width: 200,
    },
    {
      headerName: "STATE",
      field: "stateSelect",
      width: 100,
    },
    {
      headerName: "CITY",
      field: "cityField",
      width: 150,
    },
    {
      headerName: "ZIP",
      field: "Zipfield",
      width: 110,
    },
    {
      headerName: "BOROUGH",
      field: "borough",
      width: 150,
    },
    {
      headerName: "STATUS",
      field: "Status",
      width: 100,
    },
    {
      headerName: "EmailValidated",
      field: "additionalField2",
      width: 100,
    },
    {
      headerName: "LocationValidated",
      field: "additionalField3",
      width: 70,
    },
    {
      headerName: "CSV",
      field: "additionalField4",
    },
  ];

  const searchBarComponent = (
    <div className="search-bar">
      <SearchIcon className="search-icon" />
      <input
        id="searchInput"
        type="text"
        placeholder="Quick Search"
        value={searchValue}
        onChange={handleSearch}
      />
      <NewTaskButton />
      <NewTaskButtonBlue />
    </div>
  );

  return (
    <div className="tabs">
      <Tabs>
        <TabList>
          <Tab>Tasks</Tab>
          <Tab>Bulk Tasks</Tab>
          <Tab>Proxies</Tab>
          <Tab>Emails</Tab>
          <Tab>Admin Panel</Tab>
        </TabList>

        <TabPanel>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid-container">
              {searchBarComponent}
              <div
                className="ag-theme-alpine"
                style={{
                  maxHeight: 416,
                  height: `${filteredData.length * 70 + 50}px`,
                  width: "100%",
                  overflowY: "auto",
                }}
              >
                <AgGridReact
                  rowData={filteredData}
                  columnDefs={columnDefs}
                  domLayout="autoHeight"
                  rowHeight={70}
                  suppressHorizontalScroll={false}
                  suppressVerticalScroll={false}
                  suppressMovableColumns={true}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          )}
        </TabPanel>

        <TabPanel>Content for Bulk Tasks</TabPanel>
        <TabPanel>Content for Proxies</TabPanel>
        <TabPanel>Content for Emails</TabPanel>
        <TabPanel>Content for Admin Panel</TabPanel>
      </Tabs>
      <YourComponent onDataLoaded={onDataLoaded} />
    </div>
  );
};

export default DashboardGrid;
