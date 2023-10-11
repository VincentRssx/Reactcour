function NavBar({bouton,result,liste}){
    
    const handleClickPlus =() => {
        bouton(result +1);
      }
      const handleClickMoins =() => {
        bouton(result -1);
      }

      return(
      <>
      
      { result>0 ? <button onClick={handleClickMoins}>Précédent</button> : <button>No index before</button>}
     {result < liste.length - 1 ? <button onClick={handleClickPlus}>Suivant</button> : <button>End of index</button>} 
     
      </>
      )
}

export default NavBar;