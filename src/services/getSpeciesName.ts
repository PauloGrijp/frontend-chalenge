import axios from 'axios';
import { Character } from "../interfaces/IStarWars";

export async function getSpeciesName(results: Character[]){
  const characters = await Promise.all(results.map(async (people) => {    
    if (people.species.length === 0) {
      return {
        ...people,
        species: '',
      }
    }
    const response = await axios.get(people.species[0]);
    return {
     ...people,
      species: response.data.name,     
    }
  }));
  return characters;
}