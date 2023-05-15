import React, { useState } from 'react';
import axios from 'axios';
import "../Styles/LoginPage.css"

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
    <div className='container'>
      

      <form onSubmit={handleSubmit} className='rectangleParent'>
      <img
        className="appLogo1"
      src={"https://firebasestorage.googleapis.com/v0/b/food-alley-46853.appspot.com/o/Salman_Moussa_FoodAlley%20(1).png?alt=media&token=3781d959-b52f-40bb-bebb-b0461c397954"}       
      />
      <h2 className="login1">Register</h2>
        
        <input type="text" id="name" value={name} onChange={handleNameChange} capture className='frameLayout'   placeholder="Username" required />

        
        <input type="email" id="email" value={email} onChange={handleEmailChange} className='frameLayout'           placeholder="Email"  required />

        <input type="password" id="password" value={password} onChange={handlePasswordChange} className='frameLayout'           placeholder="password"  required />
        
        <input type="phone_number" id="phone_number" value={phone_number} onChange={handlephonenumbercgange} className='frameLayout'           placeholder="Phone Number"   required />

        <button type="submit" className="rectangleView">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
