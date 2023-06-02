import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar"
import { useState } from "react";
import "./App.css";


const pokemonList = [

  {
  
      name: "bulbasaur",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  
    },
  
    {
  
      name: "charmander",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  
    },
  
    {
  
      name: "squirtle",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  
    },
  
    {
  
      name: "pikachu",
  
      imgSrc:
  
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  
    },
  
    {
  
      name: "mew",
  
    },
  
  ];


  function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);
    const pokemon = pokemonList[pokemonIndex];

    const handleClickPrevious = () => {
      setPokemonIndex((prevIndex) =>
        prevIndex === 0 ? pokemonList.length - 1 : prevIndex - 1
      )
    }
  
    const handleClickNext = () => {
      setPokemonIndex((nextIndex) =>
        nextIndex === pokemonList.length - 1 ? 0 : nextIndex + 1
      )
    }

  return (
    <div>
    <MyTitle />
    <PokemonCard 
        pokemon={pokemon}
   />
    <NavBar
      handleClickPrevious = {handleClickPrevious}
      handleClickNext = {handleClickNext}
    />
    </div>
  )
}

export default App;