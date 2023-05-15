import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

import "../Styles/AminPanel.css";
import RecipeForm from './RecipeForm';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const[openform,setopenform]=useState(false);
  const[closeform, setcloseform]=useState(false);


 /*  const showform=()=>{
    setopenform(!openform);

  }
  const hideform=()=>{
    setcloseform(!closeform);
  } */


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/recipes')
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving recipes:', error);
      });
    
  }, []);
  const deleteRecipe = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/recipes/${id}`);
      // Refresh the recipe list after successful deletion
      //setchRecipes();
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
    
  };
  return (
    <>
    <div className='listContainer'>
      <div className='listTitle'>
      <h1 className='title'>Recipe List</h1>
      <button className='addrecipe' onClick={()=>{setopenform(!openform)} }>Add Recipe</button>
      </div>
      <table className='table'>
        <thead>
          <tr >
            <th className='recipetitles'>id</th>
            <th className='recipetitles'>Image</th>
            <th className='recipetitles'>Name</th>
            <th className='recipetitles'>Description</th>
            <th className='recipetitles'>Price</th>
            <th className='recipetitles'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.id}</td>
              <td> <img className='tableimg' src={recipe.imguri} alt="Image Description" /></td>
              <td>{recipe.name}</td>
              <td>{recipe.descreption}</td>
              <td>{recipe.price}</td>
              <td>
                <button className='delete' onClick={() => deleteRecipe(recipe.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='popup'>{openform && <RecipeForm/>}</div>
    </div>
    </>
  );
};

export default RecipeList;
