import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PastReports = () => {
  const [unconfirmedReports, setUnconfirmedReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reportsRes, confirmedRes] = await Promise.all([
          fetch('http://localhost:5000/reports'),
          fetch('http://localhost:5000/confirmed')
        ]);

        const [reportsData, confirmedData] = await Promise.all([
          reportsRes.json(),
          confirmedRes.json()
        ]);

        const confirmedIds = new Set(confirmedData.map((r) => r.id));
        const unconfirmed = reportsData.filter((r) => !confirmedIds.has(r.id));

        setUnconfirmedReports(unconfirmed);
      } catch (err) {
        console.error('Failed to fetch data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className='header'>Past Reports</h2>
      {loading ? (
        <p>Loading...</p>
      ) : unconfirmedReports.length === 0 ? (
        <p>No past reports available.</p>
      ) : (
        unconfirmedReports.map((report) => (
          <div
            key={report.id}
            style={{
              border: '1px solid gray',
              padding: '10px',
              margin: '10px 0'
            }}
          >
            <p>
              <strong>Location:</strong> {report.location}
            </p>
            <p>
              <strong>Timestamp:</strong> {report.timestamp}
            </p>
            <Link to={`/past-report/${report.id}`}>View Full Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default PastReports;