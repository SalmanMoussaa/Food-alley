import React, { useEffect, useState } from 'react';
import axios from 'axios';
import KitchenForm from './KitchenForm';

const KitchensList = () => {
  const [kitchens, SetKitchens] = useState([]);
  const[openform,setopenform]=useState(false);


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/kitchens')
      .then((response) => {
        SetKitchens(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving recipes:', error);
      });

  }, []);

  return (
    <div className='listContainer'>
        <div className='listTitle'>
      <h1 className='title'>Kitchens List</h1>
      <button className='addrecipe' onClick={()=>{setopenform(!openform)}} >Add kitchen</button>
      </div>
      <div className='kitchencont'> 
      {kitchens.map((kitchen) => (
        <div className='kitchenbase'>
           <div className='kitchenimg'> <img  src={kitchen.imguri} alt="Image Description" /></div>
            <h1 className='kitchenName'>
                {kitchen.name}
            </h1>
            <h1 className='kitchenSlang'>
                {kitchen.slang}
            </h1>
            


        </div>


      ))}

      
      </div>
      <div className='popup'>{openform && <KitchenForm/>}</div>
    </div>
  );
}

export default KitchensList;
