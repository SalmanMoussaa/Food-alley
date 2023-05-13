import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Login from './screens/login';
import AdminPanel from './screens/AdminPanel';
import './App.css';
import Register from './screens/register';
import Recipes from './screens/recipes';


function App() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);

   useEffect(() => {
    const storedToken = localStorage.getItem('token') || '';
    setToken(storedToken);
  }, []);
  
 /*  useEffect(() => {
    if (token) {
      const decodedUser = JwtPayload(token);
      setUser(decodedUser);
    } else {
      setUser(null);
    }
  }, [token]);  */

  const PrivateRoute = ({ element: Component, ...rest }) => {
    if (!token) {
      return <Navigate to="/login" />;
    }
    return <Component {...rest} />;
  };

  return (
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route
          path="/AdminPanel"
           element={<AdminPanel />} />
        
        <Route
          path="/recipes"
          element={<Recipes />} />
        
        <Route path="/register" element={<Register />} />
      </Routes>
  );
}

export default App;
