import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PastReport = () => {
  const { id } = useParams();
  const [report, setReport] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/reports')
      .then(res => res.json())
      .then((data) => {
        const found = data.find((r) => r.id.toString() === id);
        setReport(found);
      });
  }, [id]);

  const handleConfirm = async () => {
    await fetch('http://localhost:5000/confirmed', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(report)
    });
    alert('Report confirmed and saved.');
    navigate('/past-reports');
  };

  const handleDeny = async () => {
    // Send a DELETE request to remove the denied report(s)
    await fetch(`http://localhost:5000/reports/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          alert('Report denied and deleted.');
          navigate('/past-reports');
        } else {
          alert('Failed to deny report.');
        }
      })
    //alert('Report denied.');
    //navigate('/past-reports');
    .catch((error) => {
      console.error("Error denying the report:", error);
      alert('An error occurred while denying the report.');
    });
  };

  if (!report) return <p>Loading...</p>;

  return (
    <div>
      <h2>Report Detail</h2>
      <p><strong>Behaviors:</strong> {report.behaviors.join(', ')}</p>
      <p><strong>Location:</strong> {report.location}</p>
      <p><strong>Description:</strong> {report.description}</p>
      <p><strong>Timestamp:</strong> {report.timestamp}</p>
      <button onClick={handleConfirm} style={{ marginRight: '10px' }}>Confirm</button>
      <button onClick={handleDeny}>Deny</button>
    </div>
  );
};

export default PastReport;