import './App.css';
import {useState, useEffect} from "react";
import data from "./json/data.json";
import axios from 'axios';

function Image(props){
  return (
    <img className='image' src={props.img}/>
  );
}

function About(props){
  return (
    <div className='about__box'>
      <p className='species'>Species <span>{props.species}</span></p>
      <p className='gender'>Gender <span>{props.gender}</span></p>
      <p className='location'>Location <span>{props.location}</span></p>
    </div>
  );
}

function CharacterCard(props){
  return (
    <div className='card'>
      <Image img={props.character.image}/>
      <p className='name'>{props.character.name}</p>
      <About 
        species={props.character.species} 
        gender={props.character.gender} 
        location={props.character.location.name}/>
    </div>
  );
}

function App() {
  const [characters, setCharacters] = useState([]);

  const client = axios.create({baseURL: "https://rickandmortyapi.com/api/character/?page=1"});

  async function getCharacters(){
    const response = await client.get();
    console.log(response.data.results);
    setCharacters(response.data.results);
  }

  useEffect(() => {
    getCharacters();
  }, []);
  return (
    <div className="App">
      {
        characters.map((c, i) => <CharacterCard character={c} key={i}/>)
      }
    </div>
  );
}

export default App;
