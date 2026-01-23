import { Cache } from "./pokecache";

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
        return anycache;
      } else {
        const response = await fetch(pageURL || `${PokeAPI.baseURL}/location`);
        const data = await response.json();
        return data;
      }
    } catch (error) {
      console.error("Error fetching locations:", error);
      throw error;
    }
  }

  async fetchLocation(locationName: string): Promise<Location> {
    try {
      const response = await fetch(
        `${PokeAPI.baseURL}/location/${locationName}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching locations:", error);
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
