import { SingleCharacterData } from '../../../../interfaces/IStarWars';
import DetailItem from '../DetailItem';

interface DetailListProps {
  infoDetail: SingleCharacterData;
}

function DetailList({ infoDetail }: DetailListProps) {
  return (
    <ul>
      <DetailItem title="name" description={infoDetail.name} />
    </ul>
  );
}

export default DetailList;
