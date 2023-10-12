function NavBar({ setPokemonToDisplay, pokemon }) {


  // // const handleClickPlus =() => {
  // //     setPokemonIndex(pokemonIndex +1);
  // //   }
  const handleClick = () => {
       setPokemonToDisplay(pokemon);
  }

  return (
    <>
    <ul>
      <li>
              <button onClick={handleClick} >{pokemon.name}</button>
      </li>
    </ul>
    </>
  )
}

export default NavBar;