# **Welcome to Build a Pokedex**

## Introduction
We're going to build a Pokedex in a command-line REPL. We'll use the incredible PokéAPI to fetch all of the data we'll need using GET requests. 

A Pokedex is just a make-believe device that lets us look up information about Pokemon - things like their name, type, and stats.

## Goals
- Practice making HTTP requests in TypeScript
- Learn how to build a CLI tool that makes interacting with a back-end server easier
- Get hands-on practice with local Typescript development and tooling
- Learn about caching and how to use it to improve performance

## Installation
```bash
npm install  # set up the project
npm run dev # start the development server in CLI
npm run dev | tee repl.log # start the development server in CLI and log output to repl.log
npm run test # run the tests using vitest
```

## Example Usage
```bash
Pokedex > help 

Welcome to the Pokedex!
Usage:

exit: Exits the pokedex
help: Shows available commands
map: Shows available locations
mapb: Shows previous locations
explore: Shows available pokemons in a location
catch: Catches a pokemon
inspect: Inspects a pokemon
pokedex: Shows your caught pokemons
```

## Contributing
We welcome contributions to this project! If you have any ideas or suggestions, please feel free to open an issue or submit a pull request. :)
