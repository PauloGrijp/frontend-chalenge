import axios from 'axios';

export async function getAllCharacters() { 
  const response = await axios.get('https://swapi.dev/api/people');
  return response.data;
}