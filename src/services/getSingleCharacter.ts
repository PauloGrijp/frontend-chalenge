import axios from 'axios';
import { SingleCharacterData } from '../interfaces/IStarWars';
import { getFilms } from './getFilms';

export async function getCharacter(id?: string) {
  const response = await axios.get<SingleCharacterData>(`https://swapi.dev/api/people/${id}/`);  

  let getSpeacieName;

  if (response.data.species.length === 0) {
    getSpeacieName = ''
  } else {
    getSpeacieName = await axios.get(response.data.species[0]);
  }
  const getHomeWord = await axios.get(response.data.homeworld);
  const getFilmsName = await getFilms(response.data.films);


  return {
    ...response.data,
    homeworld: getHomeWord.data.name,
    species: getSpeacieName,
    films: getFilmsName
  }
}