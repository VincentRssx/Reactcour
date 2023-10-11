import PropTypes from "prop-types";

PokemonCard.propTypes = {
  pokemons : PropTypes.shape({
    name : PropTypes.string.isRequired,
    imgSrc : PropTypes.string.isRequired,
  }).isRequired
}

function PokemonCard(props) {
  
  
    return <img src = {props.pokemons.imgSrc}/>;
    
  }
  
  export default PokemonCard;
  
  