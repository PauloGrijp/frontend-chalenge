import axios from 'axios';
import { SingleCharacterData } from '../interfaces/IStarWars';

export async function getCharacter(id?: string) {
  const response = await axios.get<SingleCharacterData>(`https://swapi.dev/api/people/${id}/`);  

  return response.data;
}