import { Character } from "../interfaces/IStarWars";

export function setIdCharacter(results: Character[]) {
  const characters = results.map((people) => {
    const peopleId = people.url.split('/')[5]
    return {
      ...people,
      id: peopleId,
    }
  })
  return characters;
}