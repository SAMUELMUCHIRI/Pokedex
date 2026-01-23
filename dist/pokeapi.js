import { Cache } from "./pokecache.js";
export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    cache;
    constructor(cacheInterval) {
        this.cache = new Cache(cacheInterval);
    }
    stopReapLoop() {
        this.cache.stopReapLoop();
    }
    async fetchLocations(pageURL) {
        try {
            const anycache = this.cache.get(pageURL || `${PokeAPI.baseURL}/location`);
            if (anycache) {
                console.log("-------From Cache--------");
                return anycache;
            }
            else {
                console.log("-------From API-------");
                const response = await fetch(pageURL || `${PokeAPI.baseURL}/location`);
                const data = await response.json();
                this.cache.add(pageURL || `${PokeAPI.baseURL}/location`, data);
                return data;
            }
        }
        catch (error) {
            console.error("Error fetching locations:", error);
            throw error;
        }
    }
    async fetchLocation(locationName) {
        try {
            let url = `${PokeAPI.baseURL}/location-area/${locationName}`;
            const anycache = this.cache.get(url);
            if (anycache) {
                console.log("-------From Cache--------");
                return anycache;
            }
            else {
                console.log("-------From API-------");
                const response = await fetch(url);
                const data = await response.json();
                this.cache.add(url, data);
                return data;
            }
        }
        catch (error) {
            console.error("Error fetching location area :", error);
            throw error;
        }
    }
    async fetchPokemon(pokemonName) {
        try {
            let url = `${PokeAPI.baseURL}/pokemon/${pokemonName}`;
            const anycache = this.cache.get(url);
            if (anycache) {
                console.log("-------From Cache--------");
                return anycache;
            }
            else {
                console.log("-------From API-------");
                const response = await fetch(url);
                const data = await response.json();
                this.cache.add(url, data);
                return data;
            }
        }
        catch (error) {
            console.error("Error fetching pokemon :", error);
            throw error;
        }
    }
}
