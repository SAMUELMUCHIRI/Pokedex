import type { State } from "./state.js";

export async function mapb(state: State) {
  if (!state.prevLocationsURL) {
    console.log("\nyou're on the first page");
  } else {
    const locations = await state.PokeAPI.fetchLocations(
      state.prevLocationsURL,
    );
    if (locations.previous) {
      state.prevLocationsURL = locations.previous;
    } else {
      state.prevLocationsURL = undefined;
    }

    if (locations.next) {
      state.nextLocationsURL = locations.next;
    } else {
      state.nextLocationsURL = undefined;
    }

    for (const location of locations.results) {
      console.log(`${location.name}-area`);
    }
  }
}
