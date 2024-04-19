// YourComponent.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const YourComponent = ({ onDataLoaded }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.gmee.pro/api/getQueueStatus"
        );
        console.log("Data received:", response.data);
        onDataLoaded(
          response.data.map((item) => ({
            cityField: item.cityField || "-",
            countryField: item.countryField || "-",
            keyWordField: item.keywordField || "-",
            requestCreated: item.requestCreated || "-",
            Status: item.status || "-",
            Zipfield: item.zipField || "-",
            additionalField1: "-",
            additionalField2: "-",
            additionalField3: "-",
            additionalField4: "-",
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return null;
};

export default YourComponent;
