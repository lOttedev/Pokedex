function PokemonCard() {

        const pokemon = pokemonList[0];

    const pokidentity = () => {
      if (pokemon.imgSrc) {
        return pokemon.imgSrc;
      } 
      else {
        return "???";
      }
    };

    return (
        <div className="pokemon-card">
          <figure className="card">
            <img
              src={pokidentity()}
              alt= {pokemon.name + pokidentity()}
              className="card-img"
            />
            <figcaption>{pokemon.name}</figcaption>
          </figure>
        </div>
      );
    }
    const pokemonList = [
        {
          name: "bulbasaur",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
          name: "mew",
        },
      ];
    
    export default PokemonCard;
    