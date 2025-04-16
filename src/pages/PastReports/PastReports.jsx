import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
//import { useAuth } from '../AuthContext.jsx'


const PastReports = () => {
    //const { user } = useAuth();
    const [reports, setReports] = useState([]);

    useEffect(() => {
      
          fetch('http://localhost:5000/reports')
              .then(res => res.json())
              .then(data => setReports(data))
              .catch(err => console.error("Failed to fetch reports:", err));
      
    }, []);

    return (
        <div>
          <h2 className='header'>Past Reports</h2>
          {reports.length === 0 ? (
            <p>No past reports available.</p>
          ) : (
            reports.map((report) => (
              <div key={report.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
                <p><strong>Location:</strong> {report.location}</p>
                <p><strong>Description:</strong> {report.description}</p>
                <Link to={`/past-report/${report.id}`}>View Details</Link>
              </div>
            ))
          )}
        </div>
      );
    }    
export default PastReports;