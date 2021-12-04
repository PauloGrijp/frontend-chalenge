export interface Character {
  name: string;
  birth_year: string;
  species: string;
  url: string;
  id?: string;
}

export interface CharactersData {
  count: string;
  next: string;
  previous: string;
  results: Character[];
}

export interface SingleCharacterData {
  name: string,
  birth_year: string,
  eye_color: string,
  gender: string,
  hair_color: string,
  height: string,
  mass: string,
  skin_color: string,
  homeworld: string,
  films: Array<string>,
  species: string,
}