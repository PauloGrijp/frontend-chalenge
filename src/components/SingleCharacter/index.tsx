import { Character } from "../../interfaces/IStarWars";


interface SingleCharacterProps {
  character: Character;
}

function SingleCharacter({ character }: SingleCharacterProps) {
  return (
    <li>
      <p>{character.name} - {character.species}</p>
      <p>{character.birth_year}</p>
    </li>
  );
}

export default SingleCharacter;
