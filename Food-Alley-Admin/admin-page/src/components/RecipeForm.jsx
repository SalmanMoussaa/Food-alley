import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const RecipeForm = () => {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [recipeIMGLINK, setRecipeIMGLINK] = useState('');
  const [recipieprices, setRecipiePrices] = useState('');
  const [recipiekitchens, setRecipieKitchens] = useState('');
  const [recipitime, setRecipitime] = useState('');
  const[closeform, setcloseform]=useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: recipeTitle,
      descreption: recipeDescription,
      price: recipieprices,
      preparation_time:recipitime,
      kitchen_id: recipiekitchens,
      imguri: recipeIMGLINK,
      
     
    };

    axios.post('http://127.0.0.1:8000/api/recipes', data)
      .then((response) => {
        console.log('Recipe added successfully:', response.data);
        
        // Perform any additional actions after successful recipe creation
      })
      .catch((error) => {
        console.error('Error adding recipe:', error);
      });

    // Reset the form fields after submission
    setRecipeTitle('');
    setRecipeDescription('');
    setRecipeIMGLINK('');
    setRecipiePrices('');
    setRecipieKitchens('');
  };

  return (
    <div>
      
    <div className="recipe-form-container">
      
      <h1>Recipes</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="recipeTitle">Title</label>
        <input type="text" id="recipeTitle" name="recipeTitle" value={recipeTitle} onChange={(e) => setRecipeTitle(e.target.value)} required />
        <label htmlFor="recipeIMGLINK">Image URL</label>
        <textarea id="recipeIMGLINK" name="recipeIMGLINK" value={recipeIMGLINK} onChange={(e) => setRecipeIMGLINK(e.target.value)} rows="1" required></textarea>

        <label htmlFor="recipeDescription">Description</label>
        <textarea id="recipeDescription" name="recipeDescription" value={recipeDescription} onChange={(e) => setRecipeDescription(e.target.value)} rows="1" required></textarea>


        <label htmlFor="recipetime">Duration</label>
        <textarea id="recipetime" name="recipetime" value={recipitime} onChange={(e) => setRecipitime(e.target.value)} rows="1" required></textarea>

        <label htmlFor="recipieprices">Price</label>
        <textarea id="recipieprices" name="recipieprices" value={recipieprices} onChange={(e) => setRecipiePrices(e.target.value)} rows="1" required></textarea>

        <label htmlFor="recipiekitchens">Kitchen ID</label>
        <textarea id="recipiekitchens" name="recipiekitchens" value={recipiekitchens} onChange={(e) => setRecipieKitchens(e.target.value)} rows="1" required></textarea>
        <button type="submit" onClick={()=>{setcloseform(!closeform)}} >Add Recipe</button>
  </form>
</div>
</div>
  );
};

export default RecipeForm;
