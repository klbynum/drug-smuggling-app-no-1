import { Link, useNavigate } from "react-router-dom";
import image from '/pictures/images.png';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/Login");
  };

  return (
    <div className="home-container">
      <h1>Home</h1>
      <h2 className="h2">
        Welcome to the Passenger Activity Monitoring System
      </h2>

      <img className="imageOne" src={image} alt="ORF LOGO" />
      <br />

      <div className="paraOne">
        This platform is designed to assist airline employees and TSA officers in identifying and addressing
        suspicious passenger behavior. By working together, we ensure a safer environment for everyone at the airport.
        <br></br>
       <strong>Using this system</strong>, you can submit reports of unusual or concerning activities, review flagged behaviors,
        and stay informed. Use the navigation buttons below to get started.
      </div>

      <div className="bottom-nav" style={{ marginTop: '2rem' }}>
        <Link to="/CreateReport" className="home-button">Create Report</Link>
        <Link to="/Urgent Alerts" className="home-button">Urgent Alerts</Link>
        <Link to="/Past-Reports" className="home-button">Past Reports</Link>
        <button onClick={handleLogout} className="home-button logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
