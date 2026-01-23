export async function inspect(state) {
    if (state.command_args) {
        if (state.pokemon_caught.has(state.command_args)) {
            try {
                let name = state.command_args;
                if (state.pokemon_caught.get(name)) {
                    const pokemon_info = await state.PokeAPI.fetchPokemon(state.command_args);
                    const height = await pokemon_info.height;
                    const weight = await pokemon_info.weight;
                    const stats = await pokemon_info.stats;
                    const types = await pokemon_info.types;
                    console.log(`Name: ${name}`);
                    console.log(`Height: ${height}`);
                    console.log(`Weight: ${weight}`);
                    console.log(`Stats:`);
                    for (let stat of stats) {
                        console.log(`   -${stat.stat.name}: ${stat.base_stat}`);
                    }
                    console.log(`Types:`);
                    for (let type of types) {
                        console.log(`   -${type.type.name}`);
                    }
                }
                else {
                    console.log(`you have not caught that ${name}`);
                }
            }
            catch (error) {
                console.log(`Error fetching pokemon info: ${error}`);
            }
        }
        else {
            console.log(`you have not caught that ${state.command_args}`);
        }
    }
    else {
        console.log("No Pokimon name provided");
    }
}
