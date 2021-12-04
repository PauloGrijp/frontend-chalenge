import CharactersList from "../../components/CharactersList";
import Pagination from "../../components/Pagination";
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
        <Pagination />
      </div>
    </>
  );
}

export default Characters;
