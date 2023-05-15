import React, { useState } from 'react';
import axios from 'axios';
import '../Styles/LoginPage.css'; // Import the CSS file for styling
import { useNavigate, Link, Navigate } from "react-router-dom";

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
            if (response.data.user.is_admin === 1) {
              // Admin login
              console.log("Admin login successful!");
             { <Navigate to="/AdminPanel" />}
              setIsAuthenticated=data.token;
              const token = data.token;
              console.log(token)
              localStorage.setItem('token', token); // Save the token to localStorage
               // Redirect to AdminPanel
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
    <div className="logincontainer">
     
      <div className="rectangleParent">
      <img
        className="appLogo1"
      src={"https://firebasestorage.googleapis.com/v0/b/food-alley-46853.appspot.com/o/Salman_Moussa_FoodAlley%20(1).png?alt=media&token=3781d959-b52f-40bb-bebb-b0461c397954"}       
      />
      <h2 className="login1">Login</h2>

        <input
          className="frameLayout"
          type="text"
          placeholder="Email"
          value={myEmail}
          onChange={handleMyEmailChange}
        />
        <input
          className="frameLayout"
          type="password"
          placeholder="Password"
          value={myPassword}
          onChange={handleMyPasswordChange}
        />
        <button className="rectangleView" onClick={handleSubmitLogin}>
          Login
        </button>
      </div>
      {loginError && <p>{loginError}</p>}
     

      
    </div>
  );
};

export default Login;
