import React from 'react'
import './Login.css';
import { FaUserAlt, FaLock } from "react-icons/fa";


const Login = () => {
  return (
    <>
    <div className='wrapper'> </div>
      <form className="allInfo">
        <h1>Sign in to TSA Smuggling Detection</h1>
        <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUserAlt className='icon' />
        </div>
        
        <div className='remember'>
            <input type="password" placeholder='Password' required />
            <FaLock className='icon' />
        </div>

        <div>
            <label><input type = "checkbox" className="rememLabel"/>Remember me </label>
            <a href="#">Forgot password?</a>
        </div>
        <button type="submit">Login</button>
    </form>
    </>
  )
}

export default Login