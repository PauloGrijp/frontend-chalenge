import axios from 'axios';
import { CharactersData } from '../interfaces/IStarWars';

export async function getAllCharacters() { 
  const response = await axios.get<CharactersData>('https://swapi.dev/api/people');
  return response.data;
}