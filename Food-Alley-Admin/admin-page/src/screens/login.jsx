import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/LoginPage.css'; // Import the CSS file for styling
import { useNavigate, Link } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [myEmail, setMyEmail] = useState('');
  const [myPassword, setMyPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  let nav = useNavigate();

  const handleMyEmailChange = (e) => {
    setMyEmail(e.target.value);
  };

  const handleMyPasswordChange = (e) => {
    setMyPassword(e.target.value);
  };
  const handleSubmitLogin = () => {
    const data = {
      email: myEmail,
      password: myPassword,
      password_confirmation: myPassword
    };
  
    const config = {
      method: 'post',
      url: 'http://127.0.0.1:8000/api/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    };
  
    axios
      .request(config)
      .then((response) => {
        if (response.status === 200) {
          const data = response.data;
          if (data.success) {
            const user = response.data.user;
            console.log(response.data.user.is_admin);
            if (response.data.user.is_admin === '1') {
              // Admin login
              setIsAuthenticated=data.token;
              const token = data.token;
              localStorage.setItem('token', token); // Save the token to localStorage
              console.log("Admin login successful!");
              nav("/adminpanel"); // Redirect to AdminPanel
            } else {
              // Non-admin login
              setLoginError('Sorry, only admins are allowed to log in.');
            }
          } else {
            // Login failed
            setLoginError('Login failed.');
          }
        } else {
          // Request failed
          setLoginError('Error: ' + response.status);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="container">
      <img
        className="appLogo1"
        src={require("../assets/logo.png").default}
        alt="App Logo"
      />
      <h2 className="login1">Login</h2>

      <div className="rectangleParent">
        <input
          className="frameLayout"
          type="text"
          placeholder="Email"
          value={myEmail}
          onChange={handleMyEmailChange}
        />
        <input
          className="frameLayout1"
          type="password"
          placeholder="Password"
          value={myPassword}
          onChange={handleMyPasswordChange}
        />
        <button className="rectangleView" onClick={handleSubmitLogin}>
          <span className="login2">Login</span>
        </button>
      </div>
      {loginError && <p>{loginError}</p>}
     

      <p className="dontHaveAnContainer">
        <span className="dontHaveAn">Don't have an account?</span>
        <span className="loginTypo"> Signup</span>
      </p>
    </div>
  );
};

export default Login;
