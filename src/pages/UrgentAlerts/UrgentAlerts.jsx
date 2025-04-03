import React, { useContext } from 'react';
import { ReportContext } from './ReportContext';

const UrgentAlerts = () => {
  const { reports } = useContext(ReportContext);

  return (
    <div>
      <h2 className='header'>Urgent Alerts</h2>
      {reports.length === 0 ? <p>No reports yet.</p> : 
        reports.map((report, index) => (
          <div key={index} style={{ border: '1px solid red', padding: '10px', margin: '10px 0' }}>
            <p><strong>Behaviors:</strong> {report.behaviors.join(', ')}</p>
            <p><strong>Description:</strong> {report.description}</p>
            <p><strong>Timestamp:</strong> {report.timestamp}</p>
          </div>
        ))
      }
    </div>
  );
};

export default UrgentAlerts;
