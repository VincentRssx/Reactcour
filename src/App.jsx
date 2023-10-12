import { useState } from "react";
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

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
  const [pokemonToDisplay, setPokemonToDisplay] = useState();

  console.log('ici dans mon app pokemonToDisplay ==>', pokemonToDisplay)
  //
  return (

    <div>
      <MyTitle />
      
      {pokemonList.map((pokemon) => (
        <NavBar key={pokemon.name} pokemon={pokemon} setPokemonToDisplay={setPokemonToDisplay} />
      ))}
      {pokemonToDisplay ? (<><p> {pokemonToDisplay.name}</p>
        <img src={pokemonToDisplay.imgSrc} />      </>) : ''
      }

      {/* <PokemonCard pokemons = {pokemonList[pokemonIndex]}/> */}
    </div>
  );

}


export default App;