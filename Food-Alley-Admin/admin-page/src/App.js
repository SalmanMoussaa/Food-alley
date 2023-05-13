import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Login from './screens/login';
import AdminPanel from './screens/AdminPanel';
import './App.css';
import Register from './screens/register';
import Recipes from './screens/recipes';

function App() {
  const [token, setToken] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem('token') || '';
    setToken(storedToken);
    setIsLoggedIn(!!storedToken);
  }, []);

  const PrivateRoute = ({ component: Component, ...rest }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" />;
    }
    return <Component {...rest} />;
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/AdminPanel" /> : <Login />}
      />
      <Route
        path="/AdminPanel"
        element={<PrivateRoute component={AdminPanel} />}
      />
      <Route
        path="/recipes"
        element={<PrivateRoute component={Recipes} />}
      />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
