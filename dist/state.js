import { createInterface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
export function initState(interval) {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    return {
        PokeAPI: new PokeAPI(interval),
        nextLocationsURL: undefined,
        prevLocationsURL: undefined,
        readline: rl,
        commands: getCommands(),
        command_args: undefined,
        pokemon_caught: new Map(),
    };
}
