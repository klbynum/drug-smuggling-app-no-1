import React from 'react'
import './Login.css';
import { FaUserAlt, FaLock } from "react-icons/fa";


const Login = () => {
  return (
    <div className='wrapper'>
        <form className="allInfo">
        <h2>Sign in to TSA Smuggling Detection</h2>
        <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUserAlt className='icon' />
        </div>
        
        <div className='input-box'>
            <input type="password" placeholder='Password' required />
            <FaLock className='icon' />
        </div>

        <div>
            <label className="rememLabel">< input type = "checkbox"/>Remember me </label>
            <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>  
  );
};

export default Login