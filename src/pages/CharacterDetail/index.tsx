import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Button from "../../components/Button";
import Stars from "../../components/Stars";
import Title from "../../components/Title";
import { getCharacter } from "../../services/getSingleCharacter";

import './characterDetail.scss';
import DetailList from "./components/DetailList";

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState();

  useEffect(() => {
    getCharacter(id).then(response => setCharacter(response))
  }, []);

  console.log(character)

  return (
    <>
      <Stars />
      <div className="container-detail">
        <Title title="Descrição" />
        <DetailList infoDetail=""/>
        <Button
          title="Voltar"
          onPagination={() => {}}
          isDisabled={false}
        />
      </div>
    </>
  );
}

export default CharacterDetail;
