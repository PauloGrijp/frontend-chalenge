import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

import Button from "../../components/Button";
import Loading from "../../components/Loading";
import Stars from "../../components/Stars";
import Title from "../../components/Title";
import { SingleCharacterData } from "../../interfaces/IStarWars";
import { getCharacter } from "../../services/getSingleCharacter";

import './characterDetail.scss';
import DetailList from "./components/DetailList";

function CharacterDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [character, setCharacter] = useState<SingleCharacterData>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    getCharacter(id)
      .then(response => {
        setCharacter(response);
        setIsLoading(false)
      })
  }, []);

  function handleRedirect() {
    navigate('/');
  }

  console.log(character)

  return (
    <>
      <Stars />
      {isLoading ? (<Loading />) : (
        character && ( 
        <div className="container-detail">
          <Title title="Descrição" />
          <DetailList infoDetail={character}/>
          <Button
            title="Voltar"
            onClick={handleRedirect}
            isDisabled={false}
          />
        </div>)
      )}
    </>
  );
}

export default CharacterDetail;
