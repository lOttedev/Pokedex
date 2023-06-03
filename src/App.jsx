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
    const showAnotherPokemon = (selectedPokemonIndex) => {
      setPokemonIndex(selectedPokemonIndex);
    };
  return (
    <div>
    <MyTitle />
    <PokemonCard 
        pokemon={pokemon}
   />
      <NavBar
    pokemonList={pokemonList}
    showAnotherPokemon={showAnotherPokemon}
    />
    </div>
  )
}

export default App;