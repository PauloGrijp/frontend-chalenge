import { Character } from "../../interfaces/IStarWars";
import SingleCharacter from "../SingleCharacter";

import './characterList.scss';

interface CharactersListProps {
  characters: Character[];
}

function CharactersList({ characters }: CharactersListProps) {
  return (
    <ul className="character-list">
      {characters.map((character) => (
        <SingleCharacter key={character.name} character={character}/>
      ))}     
    </ul>
  );
}

export default CharactersList;
