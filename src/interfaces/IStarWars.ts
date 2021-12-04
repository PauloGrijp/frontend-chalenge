export interface Character {
  name: string;
  birth_year: string;
  species: string;
}

export interface CharactersData {
  count: string;
  next: string;
  previous: string;
  results: Character[];
}