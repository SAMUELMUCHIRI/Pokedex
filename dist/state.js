import { createInterface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    return {
        PokeAPI: new PokeAPI(),
        nextLocationsURL: undefined,
        prevLocationsURL: undefined,
        readline: rl,
        commands: getCommands(),
    };
}
