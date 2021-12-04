import CharactersList from "../../components/CharactersList";
import Stars from "../../components/Stars";
import Title from "../../components/Title";
import './character.scss'

function Characters() {
  return (
    <>
      <Stars />
      <div className="container-character">
        <Title title="Catálogo" />
        <CharactersList characters=""/>
      </div>
    </>
  );
}

export default Characters;
