import FilmItem from "../FilmItem";

import './films.scss'

interface FilmsProps {
  films: Array<string>;
}

function FilmsList({ films }: FilmsProps) {
  return (
    <div className="films">
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
