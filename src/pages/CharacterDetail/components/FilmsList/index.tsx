import FilmItem from "../FilmItem";

interface FilmsProps {
  films: Array<string>;
}

function FilmsList({ films }: FilmsProps) {
  return (
    <div>
      <p>Filmes</p>
      <ul>
        <FilmItem name="nome do filme"/>
      </ul>
    </div>
  );
}

export default FilmsList;
