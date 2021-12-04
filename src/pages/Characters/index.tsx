import { useEffect, useState } from "react";
import CharactersList from "../../components/CharactersList";
import Pagination from "../../components/Pagination";
import Stars from "../../components/Stars";
import Title from "../../components/Title";
import { CharactersData } from "../../interfaces/IStarWars";
import { getAllCharacters } from "../../services/getCharacters";
import './character.scss'

function Characters() {
  const [characters, setCharacters] = useState<CharactersData>(
    [] as unknown as CharactersData);

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
        <CharactersList characters={characters.results}/>
        <Pagination />
      </div>
    </>
  );
}

export default Characters;
