
interface DetaiItemProps {
  info: string;
}

function DetailItem({ info }: DetaiItemProps) {
  return (
    <li>{info}</li>
  );
}

export default DetailItem;
