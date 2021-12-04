import { Character } from "../../interfaces/IStarWars";
import SingleCharacter from "../SingleCharacter";

interface CharactersListProps {
  characters: Character[];
}

function CharactersList({ characters }: CharactersListProps) {
  return (
    <ul>
      {characters.map((character) => (
        <SingleCharacter key={character.name} character={character}/>
      ))}
     
    </ul>
  );
}

export default CharactersList;
