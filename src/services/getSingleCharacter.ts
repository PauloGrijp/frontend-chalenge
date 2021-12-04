import axios from 'axios';

export async function getCharacter(id?: string) {
  const response = await axios.get(`https://swapi.dev/api/people/${id}/`);  

  return response.data;
}