import { useEffect, useState } from "react";
import CharactersList from "../../components/CharactersList";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import Stars from "../../components/Stars";
import Title from "../../components/Title";
import { CharactersData } from "../../interfaces/IStarWars";
import { getAllCharacters } from "../../services/getCharacters";
import './character.scss'

function Characters() {
  const [characters, setCharacters] = useState<CharactersData>(
    [] as unknown as CharactersData);
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getAllCharacters()
      .then(response => {       
        setCharacters(response);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Stars />
      {isLoading ? (<Loading />) : (
        <div className="container-character">
          <Title title="Catálogo" />
          <CharactersList characters={characters.results}/>
          <Pagination />
        </div>
      )}
    </>
  );
}

export default Characters;
