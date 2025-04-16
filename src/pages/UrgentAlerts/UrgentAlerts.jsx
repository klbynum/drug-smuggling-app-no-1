import React, { useContext, useEffect, useRef } from 'react';
import { ReportContext } from './ReportContext';

const UrgentAlerts = () => {
  const { reports } = useContext(ReportContext);
  const hasSaved = useRef(false); // Prevent repeated saving

  useEffect(() => {
    if (reports.length > 0 && !hasSaved.current) {
      // Send each report to the backend
      reports.forEach ((report) => {
        fetch('http://localhost:5000/reports',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(report),
        })
        .then((res) => {
          if(!res.ok) {
            throw new Error(`Server responded with ${res.status}`);
          }
          return res.json();
        })
        .then ((data) => {
          console.log('Report saved: ', data);
        })
        .catch((err) => {
          console.error('Error saving report: ', err);
        });
      });
      hasSaved.current = true;
    }
  }, [reports]);

  return (
    <div>
      <h2 className='header'>Urgent Alerts</h2>
      {reports.length === 0 ? (
        <p>No reports yet.</p>
      ) : (
        reports.map((report) => (
          <div key={report.id} style={{ border: '1px solid red', padding: '10px', margin: '10px 0' }}>
            <p><strong>Behaviors:</strong> {report.behaviors.join(', ')}</p>
            <p><strong>Location:</strong> {report.location}</p>
            <p><strong>Description:</strong> {report.description}</p>
            <p><strong>Timestamp:</strong> {report.timestamp}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default UrgentAlerts;