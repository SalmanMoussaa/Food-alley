import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [phone_number, setPhone_number] = useState('');


  const handleNameChange = (e) => {
    setName(e.target.value);
  };const handlephonenumbercgange = (e) => {
    setPhone_number(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register_admin', {
        first_name: name,
        username: name,
        email: email,
        password: password,
        password_confirmation:password,
        phone_number: phone_number, // Replace with an appropriate phone number
      });

      console.log(response.data); // Access the response data
      // Additional actions after successful registration

    } catch (error) {
      setError('Registration failed. Please try again.'); // Set error message
      console.error(error);
      // Additional error handling
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
        <label htmlFor="phone_number">Password</label>
        <input type="phone_number" id="phone_number" value={phone_number} onChange={handlephonenumbercgange} required />

        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
