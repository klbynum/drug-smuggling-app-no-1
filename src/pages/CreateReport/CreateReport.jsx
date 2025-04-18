import React, { useEffect, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import './CreateReport.css';
import { ReportContext } from '../UrgentAlerts/ReportContext';
import behaviorData from './behaviors.json';
import locationData from './locations.json';

const CreateReport = () => {
  const { addReport } = useContext(ReportContext);
  const [selectedBehaviors, setSelectedBehaviors] = useState([]);
  const [description, setDescription] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [availableBehaviors, setAvailableBehaviors] = useState([]);
  const [availableLocations, setAvailableLocations] = useState([]);
  const [location, setLocation] = useState('');
  const [customLocation, setCustomLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setAvailableBehaviors(behaviorData);
    setAvailableLocations(locationData);
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
      setIsSubmitting(true);
      
      const finalLocation = location === "Other" ? customLocation : location;

      const newReport = {
        behaviors: selectedBehaviors,
        location,
        description,
        timestamp: new Date().toLocaleString(),
      };
      addReport(newReport);
      toast.success('🚨 New Urgent Alert Submitted!');
      setTimeout(() => {
        window.location.reload();
      }, 10000);
      setFormSubmitted(true);
      setSelectedBehaviors([]);
      setLocation('');
      setCustomLocation('');
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
        <select
          id="locationSelect"
          className="select-box"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="" disabled>
            Select a location...
          </option>
          {availableLocations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        {/* Custom location textbox */}
        {location === "Other" && (
          <textarea
            id="customLocation"
            className="select-box"
            value={customLocation}
            onChange={(e) => setCustomLocation(e.target.value)}
            placeholder="Enter location..."
            rows="2"
            style={{ marginTop: '0.5rem' }}
          />
        )}

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

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          Submit
        </button>
      </form>

      {formSubmitted && <p className="success-message">Report submitted successfully!</p>}
    </div>
  );
};

export default CreateReport;
