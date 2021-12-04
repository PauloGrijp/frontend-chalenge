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