import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const ReportContext = createContext();

export const ReportProvider = ({ children }) => {
  const [reports, setReports] = useState([]);

  const addReport = (newReport) => {
    setReports((prevReports) => [newReport, ...prevReports]);

    toast.info(
      <div>
        <strong>New Alert Received!</strong><br />
        <Link to="/Urgent Alerts" style={{ color: '#0b74de', textDecoration: 'underline'}}>
          View Urgent Alerts
        </Link>
      </div>,
      {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
      }
    )
   
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