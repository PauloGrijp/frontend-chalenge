import axios from 'axios';
import { CharactersData } from '../interfaces/IStarWars';
import { setIdCharacter } from '../util/setIdCharacter';
import { getSpeciesName } from './getSpeciesName';

export async function getAllCharacters(url?: string) { 
  let response;

  if (url) {
    response = await axios.get<CharactersData>(url);
  } else {
    response = await axios.get<CharactersData>('https://swapi.dev/api/people')
  }

  const { count, next, previous, results } = response.data

  const charactersWithSpeciesName = await getSpeciesName(results);
  const charactersWithId = setIdCharacter(charactersWithSpeciesName)

  console.log(charactersWithId)

  return {
    count,
    next,
    previous,
    results: charactersWithId,
  }
}