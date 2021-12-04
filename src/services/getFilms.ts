import axios from 'axios';

export async function getFilms(films: Array<string>) {
  const filmsNames = await Promise.all(films.map(async (film: string) => {
    const nameFilm = await axios.get(film)
    return nameFilm.data.title;
  }))

  return filmsNames;
}