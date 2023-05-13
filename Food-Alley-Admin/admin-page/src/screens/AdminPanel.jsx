import Kitchen from "../components/KitchensList";
import RecipeForm from "../components/RecipeForm";
import RecipeList from "../components/RecipeList";
import Sidebar from "../components/Sidebar";
import '../Styles/AminPanel.css';

const AdminPanel=()=> {
    return (

      <div className="container">
        <Sidebar/>
        <div className="content">
        
          <Kitchen />
          
        </div>
      </div>
    );
  }
  
  export default AdminPanel;