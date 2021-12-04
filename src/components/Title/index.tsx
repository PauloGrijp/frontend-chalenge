import './title.scss'

interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return (
    <>
      <h1 className="title">{title}</h1>
    </>
  );
}

export default Title;
