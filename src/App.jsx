import { useState } from "react";
import MyTitle from "./MyTitle"
import PokemonCard from "./PokemonCard";

function App() {
// pokelist
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
// 
// bouton


const [pokemonIndex, setPokemonIndex] = useState(0);

const handleClickPlus =() => {
  setPokemonIndex(pokemonIndex +1);
}
const handleClickMoins =() => {
  setPokemonIndex(pokemonIndex -1);
}
//
  return (

    <div>
   { pokemonIndex>0 ? <button onClick={handleClickMoins}>Précédent</button> : <button>No index before</button>}
     {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClickPlus}>Suivant</button> : <button>End of index</button>} 
     
      <MyTitle/>
<PokemonCard pokemons = {pokemonList[pokemonIndex]}/>  ;
 </div> 
  );
  
}


export default App;