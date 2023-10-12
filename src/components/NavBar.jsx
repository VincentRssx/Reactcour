function NavBar({ pokemonList, pokemonToDisplay, setPokemonToDisplay }) {
  // // const handleClickPlus =() => {
  // //     setPokemonIndex(pokemonIndex +1);
  // //   }
  const handleClick = (pokemon) => {
    setPokemonToDisplay(pokemon);
  }

  return (  
    <>
      {pokemonList.map((pokemon) => (
        <button key={pokemon.name} onClick={() => handleClick(pokemon)}>{pokemon.name}</button>
      ))}
    <p>{pokemonToDisplay.name}</p> <img src={pokemonToDisplay.imgSrc} alt=""/>
      
      {pokemonToDisplay.name === "pikachu" ? window.alert("pikapika") : null}


    </>
  )
}

export default NavBar;