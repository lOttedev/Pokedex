function NavBar({pokemonList, showAnotherPokemon}) {


    return (
        <div style={{display: "flex"}}>
      {pokemonList.map((pokemon, index) => (
        <div style={{justifyContent:"center", alignItems:"center", margin:"1em"}} key={pokemon.name}>
          <button onClick={() => showAnotherPokemon(index)}>{pokemon.name}</button>
        </div>
      ))}
    </div>
      );
    }
  


export default NavBar;

