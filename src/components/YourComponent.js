import React, { useState, useEffect } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const YourComponent = () => {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.gmee.pro/api/getQueueStatus"
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columnDefs = [
    { headerName: "Keyword", field: "keyword" },
    { headerName: "ZIP", field: "zip" },
    { headerName: "Country", field: "country" },
    { headerName: "State", field: "state" },
    { headerName: "Status", field: "status" },
    { headerName: "Date Created", field: "dateCreated" },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  );
};

export default YourComponent;
