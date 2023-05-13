import React from 'react';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate();

  const handleAllKitchensClick = () => {
    navigate("/AdminPanel");
  };

  const handleAllRecipesClick = () => {
    navigate("/recipes");
  };

  return (
    <div className="sidebar">
      <h1>Food Alley</h1>
      <button className='sidebarButtons' onClick={handleAllKitchensClick}>All kitchens</button>
      <button className='sidebarButtons' onClick={handleAllRecipesClick}>All Recipes</button>
    </div>
  );
};

export default Sidebar;
