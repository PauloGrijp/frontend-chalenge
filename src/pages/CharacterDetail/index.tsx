import Stars from "../../components/Stars";
import Title from "../../components/Title";

import './characterDetail.scss';

function CharacterDetail() {
  return (
    <>
      <Stars />
      <div className="container-detail">
        <Title title="Descrição" />

      </div>
    </>
  );
}

export default CharacterDetail;
