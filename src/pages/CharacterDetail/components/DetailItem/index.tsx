import './detailItem.scss';

interface DetaiItemProps {
  title: string;
  description: string | Array<string>
}

function DetailItem({ title, description }: DetaiItemProps) {
  return (
    <li className="detail-item">
      <span>{title}:</span>
      <span>{description}</span>
    </li>
  );
}

export default DetailItem;
