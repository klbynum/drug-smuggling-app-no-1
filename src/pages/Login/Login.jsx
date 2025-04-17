import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(null); // now stores which user logged in

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd]);

  const credentials = {
    "tsa.admin": "Secure@1234",
    "law.enforce": "Justice#2024"
  };

  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate login
    if (!(user in credentials) || credentials[user] !== pwd) {
      setErrMsg("Invalid username or password.");
      return;
    }

    // Success
    setUser('');
    setPwd('');
    setErrMsg('');
    setSuccess(user); // store which user logged in
    navigate("/home");

  };

  return (
    <>
      {success ? (
        <section>
          <h1>
            {success === 'tsa.admin' ? 'TSA Employee' : 'Law Enforcement'} logged in!
          </h1>
          <br />
          <p>
            <Link to="/">Go to Home</Link>
          </p>
        </section>
      ) : (
        <div className="login-page">
          <div className="wrapper">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
              {errMsg}
            </p>
            <h1>Sign in to TSA Smuggling Detection</h1>
            <form onSubmit={handleSubmit}>
              <div className="input-box">
                <FaUserAlt className="icon" />
                <input
                  type="text"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  placeholder="Username"
                />
              </div>
              <div className="input-box">
                <FaLock className="icon" />
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  placeholder="Password"
                />
              </div>
              <div className="rememLabel">
                <a href="#">Forgot Password</a>
              </div>
              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;