import CharactersList from "../../components/CharactersList";
import Footer from "../../components/Footer";
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
        <Footer />
      </div>
    </>
  );
}

export default Characters;
