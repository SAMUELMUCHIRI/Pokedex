export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        try {
            const response = await fetch(pageURL || `${PokeAPI.baseURL}/location`);
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error("Error fetching locations:", error);
            throw error;
        }
    }
    async fetchLocation(locationName) {
        try {
            const response = await fetch(`${PokeAPI.baseURL}/location/${locationName}`);
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error("Error fetching locations:", error);
            throw error;
        }
    }
}
