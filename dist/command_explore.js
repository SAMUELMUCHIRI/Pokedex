export async function explore(state) {
    if (state.command_args) {
        try {
            console.log(`Exploring ${state.command_args}...`);
            const location_area_info = await state.PokeAPI.fetchLocation(state.command_args);
            const pokemons = await location_area_info.pokemon_encounters;
            console.log("Found Pokemon:");
            for (const pokemon of pokemons) {
                console.log(`- ${pokemon.pokemon.name}`);
            }
        }
        catch (error) {
            console.error(`Error exploring location: ${error}`);
        }
    }
    else {
        console.log("No location provided");
    }
}
