import image from '/pictures/images.png';
import './Home.css'

const Home = () => {
    return (
      <>
      <h1>Home</h1>
      <h2 className="h2">
        Welcome to the Passenger Activity
        Monitoring System
      </h2>
      <img className="imageOne"src={image} alt="ORF LOGO" />
      <br />
      <div className='paraOne'>
        This platform is designed to assist airline employees
        TSA officers in identifying and adressing <br />
        suspicious passenger behavior. By working together,
        we ensure a safer environment for everyone 
        <br /> at the airport.
         Here, you can submit reports of unusual or concerning 
        activities, review flagged
        <br /> behaviors, and stay informed
        travel experience. Use the navigation menu or select an 
        option below 
        <br /> to begin. 
        Thank you for your commitment to safety and
        vigilance.
      </div>
      <br>
      </br>
      <div></div>
      
      </>
    )
  };
  
  export default Home;