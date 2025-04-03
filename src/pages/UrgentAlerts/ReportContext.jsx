import React, { createContext, useState } from "react";

export const ReportContext = createContext();

export const ReportProvider = ({ children }) => {
  const [reports, setReports] = useState([]);

  const addReport = (newReport) => {
    setReports((prevReports) => [newReport, ...prevReports]);
   
    //Remove the report after 30 seconds
    setTimeout(() => {
      setReports((prevReports) => prevReports.filter(report => report !== newReport));
    }, 30000);
  };

  return (
    <ReportContext.Provider value={{ reports, addReport }}>
      {children}
    </ReportContext.Provider>
  );
};