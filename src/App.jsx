import { useState } from "react";
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { useEffect } from "react";

function App() {
  // pokelist
  const pokemonList = [
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
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


  // const [pokemonIndex, setPokemonIndex] = useState(0);

  const [pokemonToDisplay, setPokemonToDisplay] = useState(pokemonList[2]);

  console.log('ici dans mon app pokemonToDisplay ==>', pokemonToDisplay)
  //

  useEffect(
    () => {
      window.alert("hello pokemon trainer :)");
    },
    []
  )
  return (


    <div>
      <MyTitle />
        <NavBar pokemonList={pokemonList} setPokemonToDisplay={setPokemonToDisplay} pokemonToDisplay={pokemonToDisplay}/>
        
     

      {/* <PokemonCard pokemons = {pokemonList[pokemonIndex]}/> */}
    </div>
  );

}


export default App;