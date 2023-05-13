import React, { useState } from 'react';
import axios from 'axios';

const KitchenForm = () => {
  const [name, setName] = useState('');
  const [slang, setSlang] = useState('');
  const [imgUri, setImgUri] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newKitchen = {
      name: name,
      slang: slang,
      imguri: imgUri
    };

    axios.post('http://localhost:8000/api/kitchens', newKitchen)
      .then((response) => {
        console.log(response.data); // Handle success response
        // Clear form fields if needed
        setName('');
        setSlang('');
        setImgUri('');
      })
      .catch((error) => {
        console.error('Error creating kitchen:', error); // Handle error
      });
  };

  return (
    <div  className="recipe-form-container">
      <h1>Create a Kitchen</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
        </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>
          Slang:
        </label>
          <input type="text" value={slang} onChange={(e) => setSlang(e.target.value)} />
        <br />
        <label>
          Image URI:
        </label>
          <input type="text" value={imgUri} onChange={(e) => setImgUri(e.target.value)} />
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default KitchenForm;
