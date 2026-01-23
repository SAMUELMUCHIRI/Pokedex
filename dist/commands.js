import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { map } from "./command_map.js";
import { mapb } from "./command_mapb.js";
import { explore } from "./command_explore.js";
import { catch_pokemon } from "./command_catch.js";
import { inspect } from "./command_inspect.js";
import { pokedex } from "./command_pokedex.js";
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Shows available commands",
            callback: commandHelp,
        },
        map: {
            name: "map",
            description: "Shows available locations",
            callback: map,
        },
        mapb: {
            name: "mapb",
            description: "Shows previous locations",
            callback: mapb,
        },
        explore: {
            name: "explore",
            description: "Shows available pokemons in a location",
            callback: explore,
        },
        catch: {
            name: "catch",
            description: "Catches a pokemon",
            callback: catch_pokemon,
        },
        inspect: {
            name: "inspect",
            description: "Inspects a pokemon",
            callback: inspect,
        },
        pokedex: {
            name: "pokedex",
            description: "Shows your caught pokemons",
            callback: pokedex,
        },
    };
}
