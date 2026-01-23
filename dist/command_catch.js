function getRandomcatch() {
    if (Math.floor(Math.random() * 10000) % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
export async function catch_pokemon(state) {
    if (state.command_args) {
        try {
            console.log(`Throwing a Pokeball at ${state.command_args}...`);
            const pokemon_info = await state.PokeAPI.fetchPokemon(state.command_args);
            let caught = false;
            const base_experience = await pokemon_info.base_experience;
            if (getRandomcatch()) {
                if (base_experience > 50 && getRandomcatch()) {
                    console.log(`${state.command_args} escaped!`);
                }
                else {
                    console.log(`${state.command_args} was caught`);
                    caught = true;
                }
            }
            else {
                console.log(`${state.command_args} escaped!`);
            }
            state.pokemon_caught.set(state.command_args, caught);
        }
        catch (error) {
            console.error(`Error catching pokemon: ${error}`);
        }
    }
    else {
        console.log("No Pokimon name provided");
    }
}
