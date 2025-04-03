import React from 'react'
import './Login.css';
import { FaUserAlt, FaLock } from "react-icons/fa";
import {useRef, useState, useEffect } from 'react';

const Login = () => {
  return (
    <div className='login-page'>
      <div className='wrapper'>
          <form className="allInfo" form id="auth-form" action="{{url_for('login')}}" method="post">
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
          <button type="submit" onClick="setActionForm('login')">Login</button>
        </form>
      </div>
    </div>
  );
  
};

export default Login