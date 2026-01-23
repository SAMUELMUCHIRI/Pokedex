export async function map(state) {
    const locations = state.nextLocationsURL
        ? await state.PokeAPI.fetchLocations(state.nextLocationsURL)
        : await state.PokeAPI.fetchLocations();
    if (locations.previous)
        state.prevLocationsURL = locations.previous;
    if (locations.next)
        state.nextLocationsURL = locations.next;
    for (const location of locations.results) {
        console.log(`${location.name}-area`);
    }
}
