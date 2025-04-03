import React from 'react';
import { useState, useContext } from 'react';
import "./CreateReport.css";
import { ReportContext } from '../UrgentAlerts/ReportContext';



const CreateReport = () => {
  const { addReport } = useContext(ReportContext);
  const [selectedBehaviors, setSelectedBehaviors] = useState([]);
  const [description, setDescription] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const [availableBehaviors, setAvailableBehaviors] = useState([
    'Unusual Reservations',
    'Purchased through Flagged Travel Agencies',
    'Adding Passengers',
    'Change in Itinerary',
    'Walk-up Purchase',
    'Paid in Cash',
    'Paid with Prepaid Card',
    'Paid with Third Party Credit Card',
    'Exact Change',
    'One-way Flight',
    'Fake Callback Number(s)',
    'Missing Phone Number',
    'Demand/Source Locations',
    'Missed Flight(s)',
    'Same Reservations',
    'New Bags',
    'Specific Types of Locks',
    'Heavy Bags (over __lbs)',
    'Suspicious Bulges',
    'Inappropriate Number of Bags',
    'Broken handles or Wheels',
    'Bag Tampered With',
    'Use of Masking Agents ',
    'Guarding luggage',
    'Failure to Pick Up Luggage',
    'Luggage but No passenger',
    'Purchase Bags at Airport',
    'Crubside Bag Drop',
    'Dissociation at Drop-off',
    'Other'
  ]);

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
  const handleSubmit = (event) => {
    event.preventDefault();
    // Show confirmation pop-up
    const userConfirmed = window.confirm('Are you sure you would like to submit?');

    // Handle form submission logic (sending data to server or console)
    if(userConfirmed){
      const newReport = {
        behaviors: selectedBehaviors,
        description,
        timestamp: new Date().toLocaleString(),
      };
      addReport(newReport); // Update the context in real-time
      setFormSubmitted(true);
      setSelectedBehaviors([]);
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
        <div>
          {availableBehaviors.map((behavior, index) => (
            <label key={index} style={{ display: 'block'}}>
              <input
                type="checkbox"
                value={behavior}
                onChange={handleBehaviorChange}
                disabled={selectedBehaviors.length >= 5 && !selectedBehaviors.includes(behavior)} 
              />
                {behavior}
            </label>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '20px' }}>
        <label htmlFor="description" onChange={(e) => setDescription(e.target.value)}>Description: </label>
        <textarea className='descriptionBox'
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          rows="4"
          cols="50"
          placeholder="Enter details here..."
          style={{ marginLeft: '10px', width: '98%' }}
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