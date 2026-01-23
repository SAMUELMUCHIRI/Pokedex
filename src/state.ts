import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

type PokemonCaught = {
  caught: boolean;
};

export type State = {
  PokeAPI: PokeAPI;
  nextLocationsURL: string | undefined;
  prevLocationsURL: string | undefined;
  readline: Interface;
  commands: Record<string, CLICommand>;
  command_args?: string;
  pokemon_caught: Map<string, boolean>;
};

export function initState(interval: number) {
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
    pokemon_caught: new Map<string, boolean>(),
  };
}
