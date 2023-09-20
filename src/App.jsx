import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [pets, setPets] = useState([]);
  useEffect(()=> {
    const fetchPets = async()=>{
      const response = await axios.get('http://localhost:3000/api/v1/pets');
      setPets(response.data);
    };
    fetchPets();
  }, []);

  return (
    <>
      <h1>My PetShop ({ pets.length })</h1>
      <ul>
        {
          pets.map( pet => {
            return (
              <li key={ pet.id } className={ pet.is_favorite ? 'favorite': '' }>
                { pet.name }</li>
            );
          })
        }
      </ul>
    </>
  )
}

export default App
