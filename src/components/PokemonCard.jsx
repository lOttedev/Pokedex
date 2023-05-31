function PokemonCard(props) {
    const pokemon = props;
  
    const pokidentity = () => {
      if (pokemon.imgSrc) {
        return pokemon.imgSrc;
      } else {
        return "???";
      }
    };
  
    return (
      <div className="pokemon-card">
        <figure className="card">
          <img
            src={pokidentity()}
            alt={pokemon.name + pokidentity()}
            className="card-img"
          />
          <figcaption>{pokemon.name}</figcaption>
        </figure>
      </div>
    );
  }
  

    export default PokemonCard;
    