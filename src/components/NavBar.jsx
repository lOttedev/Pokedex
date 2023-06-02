function NavBar({ handleClickPrevious, handleClickNext }) {
    return (
      <div>
        <button onClick={handleClickPrevious} type="button">
          Précédent
        </button>
        <button onClick={handleClickNext} type="button">
          Suivant
        </button>
      </div>
    );
  }
  


export default NavBar;