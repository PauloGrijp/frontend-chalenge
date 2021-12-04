import axios from 'axios';
import { CharactersData } from '../interfaces/IStarWars';
import { getSpeciesName } from './getSpeciesName';

export async function getAllCharacters() { 
  const response = await axios.get<CharactersData>('https://swapi.dev/api/people');
  const { count, next, previous, results } = response.data

  const charactersWithSpeciesName = await getSpeciesName(results);

  return {
    count,
    next,
    previous,
    results: charactersWithSpeciesName
  }
}