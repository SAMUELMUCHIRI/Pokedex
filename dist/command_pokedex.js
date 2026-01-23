export async function pokedex(state) {
    console.log("Your Pokedex:");
    if (state.pokemon_caught.size === 0) {
        console.log("You haven't caught any pokemons yet.");
    }
    else {
        for (let [key, value] of state.pokemon_caught) {
            if (value) {
                console.log(`- ${key}`);
            }
        }
    }
}
