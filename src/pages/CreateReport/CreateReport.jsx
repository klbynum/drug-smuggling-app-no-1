import React, { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import './CreateReport.css';
import { ReportContext } from '../UrgentAlerts/ReportContext';
import behaviorData from './behaviors.json';

const CreateReport = () => {
  const { addReport } = useContext(ReportContext);
  const [selectedBehaviors, setSelectedBehaviors] = useState([]);
  const [description, setDescription] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [availableBehaviors, setAvailableBehaviors] = useState([]);
  const [location, setLocation] = useState('');

  useEffect(() => {
    setAvailableBehaviors(behaviorData);
  }, []);

  const handleBehaviorChange = (event) => {
    const value = event.target.value;
    if (selectedBehaviors.includes(value)) {
      setSelectedBehaviors(selectedBehaviors.filter((item) => item !== value));
    } else if (selectedBehaviors.length < 5) {
      setSelectedBehaviors([...selectedBehaviors, value]);
    }
  };

  const handleRemoveBehavior = (behavior) => {
    setSelectedBehaviors(selectedBehaviors.filter((item) => item !== behavior));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userConfirmed = window.confirm('Are you sure you would like to submit?');

    if (userConfirmed) {
      const newReport = {
        behaviors: selectedBehaviors,
        location,
        description,
        timestamp: new Date().toLocaleString(),
      };
      addReport(newReport);
      toast.success('🚨 New Urgent Alert Submitted!');
      setFormSubmitted(true);
      setSelectedBehaviors([]);
      setLocation('');
      setDescription('');
    } else {
      setFormSubmitted(false);
    }
  };

  return (
    <div className="form-container">
      <h3>Create Report</h3>
      <p>Please fill in the following fields:</p>
      <form onSubmit={handleSubmit}>
        <label className="chooseBehaviorF" htmlFor="behavior">
          Choose up to five behavior(s):
        </label>
        <select
          id="behaviorSelect"
          className="select-box"
          onChange={handleBehaviorChange}
          value=""
          disabled={selectedBehaviors.length >= 5}
        >
          <option value="" disabled>
            Select a behavior...
          </option>
          {availableBehaviors.map((behavior, index) => (
            <option key={index} value={behavior} disabled={selectedBehaviors.includes(behavior)}>
              {behavior}
            </option>
          ))}
        </select>

        <label htmlFor="location" style={{ marginTop: '1rem', display: 'block' }}>
          <h4>Location:</h4>
        </label>
        <textarea
          id="location"
          className="select-box"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location here..."
          rows="4"
        />

        <label htmlFor="description" style={{ marginTop: '1rem', display: 'block' }}>
          <h4>Description:</h4>
        </label>
        <textarea
          id="description"
          className="select-box"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter details here..."
          rows="4"
        />

        <div style={{ marginTop: '1.5rem' }}>
          <h4>Selected Behaviors:</h4>
          <div style={{ marginTop: '0.5rem' }}>
            {selectedBehaviors.length > 0 ? (
              selectedBehaviors.map((behavior, index) => (
                <div key={index} className="selected-behavior">
                  {behavior}
                  <button
                    type="button"
                    className="remove-button"
                    onClick={() => handleRemoveBehavior(behavior)}
                  >
                    Remove
                  </button>
                </div>
              ))
            ) : (
              <p>No behaviors selected.</p>
            )}
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      {formSubmitted && <p className="success-message">Report submitted successfully!</p>}
    </div>
  );
};

export default CreateReport;
