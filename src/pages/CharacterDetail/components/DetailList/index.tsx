import { SingleCharacterData } from '../../../../interfaces/IStarWars';
import DetailItem from '../DetailItem';
import FilmsList from '../FilmsList';


interface DetailListProps {
  infoDetail: SingleCharacterData;
}

function DetailList({ infoDetail }: DetailListProps) {
  return (
    <ul>
      <DetailItem title="Nome" description={infoDetail.name} />
      <DetailItem title="Ano de Nascimento" description={infoDetail.birth_year} />
      <DetailItem title="Cor dos olhos" description={infoDetail.eye_color} />
      <DetailItem title="Gênero" description={infoDetail.gender} />
      <DetailItem title="Cor do cabelo" description={infoDetail.hair_color} />
      <DetailItem title="Altura" description={infoDetail.height} />
      <DetailItem title="Planeta de origem" description={infoDetail.homeworld} />
      <DetailItem title="Peso" description={infoDetail.mass} />
      <DetailItem title="Skin" description={infoDetail.skin_color} />
      <DetailItem title="Espécie" description={infoDetail.species} />
      <FilmsList films={infoDetail.films}/>     
    </ul>
  );
}

export default DetailList;
