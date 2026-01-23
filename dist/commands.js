import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { map } from "./command_map.js";
import { mapb } from "./command_mapb.js";
import { explore } from "./command_explore.js";
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
    };
}
