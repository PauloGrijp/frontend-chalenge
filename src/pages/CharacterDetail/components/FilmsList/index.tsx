import FilmItem from "../FilmItem";

interface FilmsProps {
  films: Array<string>;
}

function FilmsList({ films }: FilmsProps) {
  return (
    <div>
      <p>Filmes</p>
      <ul>
        {films.map((film) => (
          <FilmItem name={film}/>
        ))}
      </ul>
    </div>
  );
}

export default FilmsList;
