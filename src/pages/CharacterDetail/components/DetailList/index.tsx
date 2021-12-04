import { ReactNode } from 'react';
import DetailItem from '../DetailItem';

interface DetailListProps {
  infoDetail: string;
}

function DetailList({ infoDetail }: DetailListProps) {
  return (
    <ul>
      <DetailItem info="item 1" />
    </ul>
  );
}

export default DetailList;
