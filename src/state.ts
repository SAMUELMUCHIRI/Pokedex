import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  PokeAPI: PokeAPI;
  nextLocationsURL: string | undefined;
  prevLocationsURL: string | undefined;
  readline: Interface;
  commands: Record<string, CLICommand>;
};

export function initState() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  return {
    PokeAPI: new PokeAPI(100000),
    nextLocationsURL: undefined,
    prevLocationsURL: undefined,
    readline: rl,
    commands: getCommands(),
  };
}
