import { useEffect, useState } from "react";
import CharactersList from "../../components/CharactersList";
import Pagination from "../../components/Pagination";
import Stars from "../../components/Stars";
import Title from "../../components/Title";
import { getAllCharacters } from "../../services/getCharacters";
import './character.scss'

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {    
    getAllCharacters()
      .then(response => {       
        setCharacters(response)
      });
  }, []);

  console.log(characters)


  return (
    <>
      <Stars />
      <div className="container-character">
        <Title title="Catálogo" />
        <CharactersList characters=""/>
        <Pagination />
      </div>
    </>
  );
}

export default Characters;
