import RecipeForm from "../components/RecipeForm";
import RecipeList from "../components/RecipeList";
import Sidebar from "../components/Sidebar";
import '../Styles/AminPanel.css';

const recipes=()=> {
    return (

      <div className="container">
        <Sidebar/>
        <div className="content">
        
          <RecipeList />
          
        </div>
      </div>
    );
  }
  
  export default recipes;