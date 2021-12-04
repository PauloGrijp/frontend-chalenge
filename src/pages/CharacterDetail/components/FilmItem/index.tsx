interface FilmItemProps {
  name: string;
}

function FilmItem({ name }: FilmItemProps) {
  return (
    <li>{name}</li>
  );
}

export default FilmItem;
