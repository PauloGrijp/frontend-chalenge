import Button from "../../components/Button";
import Stars from "../../components/Stars";
import Title from "../../components/Title";

import './characterDetail.scss';
import DetailList from "./components/DetailList";

function CharacterDetail() {
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
