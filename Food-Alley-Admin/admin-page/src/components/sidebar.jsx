import React from 'react';
import { useNavigate, Link } from "react-router-dom";

const Sidebar=()=> {
  let nav = useNavigate();

  return (
    <div className="sidebar">
      <h1>Food Alley</h1>
         
      
          <button  className='sidebarButtons' onClick={nav('/AdminPanel')}>All kitchens</button>
 
            
      
       <button onClick={nav("/recipes")}  className='sidebarButtons'> All Recipes</button>

      
    </div>
  );
}
export default Sidebar;