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
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllCharacters()
      .then(response => {       
        setCharacters(response);
        setIsLoading(false);
      });
  }, []);

  async function handleNextPagination() {
    setIsLoading(true)
    characters?.next && await getAllCharacters(characters.next)
      .then(response => {
        setCharacters(response)
        setIsNextDisabled(!response.next);
        setIsPrevDisabled(!response.previous);
        setIsLoading(false)
      });
  }

  async function handlePrevPagination() {
    setIsLoading(true);
    characters?.previous && await getAllCharacters(characters.previous)
      .then(response => {
        setCharacters(response);
        setIsPrevDisabled(!response.previous);
        setIsNextDisabled(!response.next);
        setIsLoading(false)
      });
  }

  return (
    <>
      <Stars />
      {isLoading ? (<Loading />) : (
        <div className="container-character">
          <Title title="Catálogo" />
          <CharactersList characters={characters.results}/>
          <Pagination
            nextIsDisabled={isNextDisabled}
            prevIsDisabled={isPrevDisabled}
            onNextPage={handleNextPagination}
            onPrevPage={handlePrevPagination}
          />
        </div>
      )}
    </>
  );
}

export default Characters;
