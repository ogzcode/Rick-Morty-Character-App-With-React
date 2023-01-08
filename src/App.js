import { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from "./components/CharacterCard";

function App() {
  const [characters, setCharacters] = useState([]);

  const client = axios.create({ baseURL: "https://rickandmortyapi.com/api/character/?page=1" });

  async function getCharacters() {
    const response = await client.get();
    //console.log(response.data.results);
    setCharacters(response.data.results);
  }

  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div className="container-fluid bg-dark py-4">
      <div className='row row-cols-1 row-cols-xl-2 d-flex justify-content-center g-5'>
        {
          characters.map((c, i) => (
            <div className='col d-flex justify-content-center'>
              <CharacterCard character={c} key={i} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
