import PropTypes from "prop-types"

function PokemonCard({pokemon}) {
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

    PokemonCard.propTypes = {
        pokemon: PropTypes.shape({
          name: PropTypes.string.isRequired,
          imgSrc: PropTypes.string,
        }).isRequired,

  }


  

    export default PokemonCard;