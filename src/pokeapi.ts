import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache: Cache;

  constructor(cacheInterval: number) {
    this.cache = new Cache(cacheInterval);
  }

  stopReapLoop() {
    this.cache.stopReapLoop();
  }

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    try {
      const anycache: any = this.cache.get(
        pageURL || `${PokeAPI.baseURL}/location`,
      );
      if (anycache) {
        console.log("-------From Cache--------");
        return anycache;
      } else {
        console.log("-------From API-------");
        const response = await fetch(pageURL || `${PokeAPI.baseURL}/location`);
        const data = await response.json();

        this.cache.add(pageURL || `${PokeAPI.baseURL}/location`, data);
        return data;
      }
    } catch (error) {
      console.error("Error fetching locations:", error);
      throw error;
    }
  }

  async fetchLocation(locationName: string): Promise<Location_Area> {
    try {
      let url = `${PokeAPI.baseURL}/location-area/${locationName}`;
      const anycache: any = this.cache.get(url);
      if (anycache) {
        console.log("-------From Cache--------");
        return anycache;
      } else {
        console.log("-------From API-------");
        const response = await fetch(url);
        const data = await response.json();

        this.cache.add(url, data);
        return data;
      }
    } catch (error) {
      console.error("Error fetching location area :", error);
      throw error;
    }
  }
  async fetchPokemon(pokemonName: string): Promise<any> {
    try {
      let url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
      const anycache: any = this.cache.get(url);
      if (anycache) {
        console.log("-------From Cache--------");
        return anycache;
      } else {
        console.log("-------From API-------");
        const response = await fetch(url);
        const data = await response.json();

        this.cache.add(url, data);
        return data;
      }
    } catch (error) {
      console.error("Error fetching pokemon :", error);
      throw error;
    }
  }
}

type NamedAPIResource = {
  name: string;
  url: string;
};

type LocationArea = {
  name: string;
  url: string;
};

type GameIndex = {
  game_index: number;
  generation: NamedAPIResource;
};

type LocalizedName = {
  name: string;
  language: NamedAPIResource;
};

export type ShallowLocations = {
  count: number;
  next: string | undefined;
  previous: string | undefined;
  results: {
    name: string;
    url: string;
  }[];
};
export type Location = {
  id: number;
  name: string;
  areas: LocationArea[];
  game_indices: GameIndex[];
  names: LocalizedName[];
  region: NamedAPIResource;
};
type EncounterMethodRate = {
  encounter_method: NamedAPIResource;
  version_details: {
    rate: number;
    version: NamedAPIResource;
  }[];
};

type LocationName = {
  language: NamedAPIResource;
  name: string;
};

type EncounterDetail = {
  chance: number;
  condition_values: NamedAPIResource[];
  min_level: number;
  max_level: number;
  method: NamedAPIResource;
};

type PokemonEncounterVersionDetail = {
  encounter_details: EncounterDetail[];
  max_chance: number;
  version: NamedAPIResource;
};

type PokemonEncounter = {
  pokemon: NamedAPIResource;
  version_details: PokemonEncounterVersionDetail[];
};
export type Location_Area = {
  id: number;
  name: string;
  game_index: number;
  location: NamedAPIResource;
  names: LocalizedName[];
  encounter_method_rates: EncounterMethodRate[];
  pokemon_encounters: PokemonEncounter[];
};
