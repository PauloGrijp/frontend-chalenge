import SingleCharacter from "../SingleCharacter";

interface CharactersListProps {
  characters: string;
}

function CharactersList({ characters }: CharactersListProps) {
  return (
    <ul>
      <SingleCharacter character=""/>
      <SingleCharacter character=""/>
      <SingleCharacter character=""/>
      <SingleCharacter character=""/>
      <SingleCharacter character=""/>
      <SingleCharacter character=""/>
      <SingleCharacter character=""/>
    </ul>
  );
}

export default CharactersList;
