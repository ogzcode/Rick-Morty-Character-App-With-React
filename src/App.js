import { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from "./components/CharacterCard";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState("https://rickandmortyapi.com/api/character/?page=1");

  async function getCharacters(url) {
    const client = axios.create({ baseURL: url });
    const response = await client.get();
    setCharacters(response.data);
  }

  useEffect(() => {
    getCharacters(page);
  }, []);

  const nextPage = () => {
    if (characters.info.next !== null) {
      setPage(characters.info.next);
      getCharacters(page);
    }
  };
  const prevPage = () => {
    if (characters.info.prev !== null) {
      setPage(characters.info.prev);
      getCharacters(page);
    }
  };
  return (
    <div className="container-fluid bg-dark py-4">
      <div className="row py-5">
        <h1 className="text-white text-center">Rick And Morty Character App</h1>
        <div className="text-center mt-3">
          <button type="button" 
            className="btn btn-light me-3" 
            onClick={() => prevPage()}>Prev Page</button>
          <button type="button" 
            className="btn btn-light" 
            onClick={() => nextPage()}>Next Page</button>
        </div>
      </div>
      <div className='row row-cols-1 row-cols-xl-2 d-flex justify-content-center g-5'>
        {
          characters.results && characters.results.map((c, i) => (
            <div className='col d-flex justify-content-center' key={i}>
              <CharacterCard character={c} key={i} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
