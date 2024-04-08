import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import YourComponent from "./YourComponent";

const DashboardGrid = () => {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);

  const onDataLoaded = (data) => {
    setRowData(data);
    setLoading(false);
  };

  return (
    <div>
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
            <div
              className="ag-theme-alpine"
              style={{ height: 400, width: "100%" }}
            >
              <AgGridReact rowData={rowData}>
                <AgGridReact.Column
                  field="dateCreated"
                  cellStyle={{ "text-align": "center" }}
                ></AgGridReact.Column>
                <AgGridReact.Column
                  field="keyword"
                  cellStyle={{ "text-align": "center" }}
                ></AgGridReact.Column>
                <AgGridReact.Column
                  field="zip"
                  cellStyle={{ "text-align": "center" }}
                ></AgGridReact.Column>
                <AgGridReact.Column
                  field="country"
                  cellStyle={{ "text-align": "center" }}
                ></AgGridReact.Column>
                <AgGridReact.Column
                  field="state"
                  cellStyle={{ "text-align": "center" }}
                ></AgGridReact.Column>
                <AgGridReact.Column
                  field="status"
                  cellStyle={{ "text-align": "center" }}
                ></AgGridReact.Column>
              </AgGridReact>
            </div>
          )}
        </TabPanel>

        {}
      </Tabs>
      <YourComponent onDataLoaded={onDataLoaded} />
    </div>
  );
};

export default DashboardGrid;
