import { Character } from "../../interfaces/IStarWars";

import './singleCharacter.scss';

interface SingleCharacterProps {
  character: Character;
}

function SingleCharacter({ character }: SingleCharacterProps) {
  return (
    <li className="single-character">
      <a href={`/character/${character.id}`}>
        <p>{character.name} - {character.species}</p>
        <p>{character.birth_year}</p>
      </a>
    </li>
  );
}

export default SingleCharacter;
