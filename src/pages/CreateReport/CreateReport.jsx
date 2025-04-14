import React, { useEffect } from 'react';
import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import "./CreateReport.css";
import { ReportContext } from '../UrgentAlerts/ReportContext';
import behaviorData from './behaviors.json';



const CreateReport = () => {
  const { addReport } = useContext(ReportContext);
  const [selectedBehaviors, setSelectedBehaviors] = useState([]);
  const [description, setDescription] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [availableBehaviors, setAvailableBehaviors] = useState([]);
  const [location, setLocation] = useState('');
  
  useEffect(() =>{
    setAvailableBehaviors(behaviorData);
  }, []);
  

  const handleBehaviorChange = (event) => {
    const value = event.target.value;
    if(selectedBehaviors.includes(value)){
      setSelectedBehaviors(selectedBehaviors.filter((item) => item !== value));
    } else if (selectedBehaviors.length < 5) {
      setSelectedBehaviors([...selectedBehaviors, value]);
    }
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddBehavior = (behavior) => {
    if (selectedBehaviors.length < 5 && !selectedBehaviors.includes(behavior)) {
      selectedBehaviors([...selectedBehaviors, behavior]);
    }
  };

  const handleRemoveBehavior = (behavior) => {
    setSelectedBehaviors(selectedBehaviors.filter((item)=> item !== behavior));
  }
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // Show confirmation pop-up
    const userConfirmed = window.confirm('Are you sure you would like to submit?');

    // Handle form submission logic (sending data to server or console)
    if(userConfirmed){
      const newReport = {
        behaviors: selectedBehaviors,
        location,
        description,
        timestamp: new Date().toLocaleString(),
      };
      addReport(newReport); // Update the context in real-time
      toast.success('🚨 New Urgent Alert Submitted!')
      setFormSubmitted(true);
      setSelectedBehaviors([]);
      setLocation('');
      setDescription('');
    }
    else {
      // if user cancels, they can continue editing
      setFormSubmitted(false);
    }
  };

  return (
    <>
    <h3>Create Report</h3>
    <form onSubmit={handleSubmit}>
      <div>
        <label className = 'chooseBehaviorF' htmlFor="behavior">Choose up to five behavior(s): </label>
        <select
          id="behaviorSelect"
          onChange={handleBehaviorChange}
          value=""
          disabled={selectedBehaviors.length >= 5}
          style={{display: 'block', marginTop: '10px', padding: '8px', width: '100%' }}
        >
          <option value="" disabled> Select a behavior...</option>
          {availableBehaviors.map((behavior, index) => (
            <option key={index} value={behavior} disabled={selectedBehaviors.includes(behavior)}>
              {behavior}
            </option>
          ))}
        </select>
        <div>
        </div>
      </div>
      <div style={{ marginTop: '20px' }}>
        <label htmlFor="location"><h4>Location:</h4></label>
        <textarea 
          className='locationBox'
          id="location"
          value={location}
          onChange={handleLocationChange}
          rows="4"
          cols="50"
          placeholder="Enter location here..."
          style={{ marginTop: '-10px', marginBottom:'10px', marginLeft: '-1px', width: '99%' }}
        />
        </div>
      <div style={{ marginTop: '20px' }}>
        <label htmlFor="description" onChange={(e) => setDescription(e.target.value)}><h4>Description:</h4></label>
        <textarea className='descriptionBox'
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          rows="4"
          cols="50"
          placeholder="Enter details here..."
          style={{ marginTop: '-10px', marginBottom:'10px', marginLeft: '-1px', width: '99%' }}
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Selected Behaviors:</h3>
        <div
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            marginBottom: '10px',
            minHeight: '50px',
            width: '100%',
          }}
          >
            {selectedBehaviors.length > 0 ? (
              selectedBehaviors.map((behavior, index) => (
                <div key={index} style={{ marginBottom: '5px' }}>
                  {behavior}
                  <button
                    type="button"
                    onClick={() => handleRemoveBehavior(behavior)}
                    style={{
                      marginLeft: '10px',
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '5px',
                    }}
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

      <div>
        <button type="submit" style={{ padding: '10px 20px'}}>
          Submit
        </button>
      </div>
    </form>
    {formSubmitted && (
      <div>
        <p>Report submitted successfully!</p>
      </div>
    )}
    </>
  )
}
export default CreateReport