const pokemonData = [];

// Return the internal array (singleton). Consumers should avoid mutating directly
export function getPokemonData() {
	return pokemonData;
}

// Add a pokemon to the internal singleton array
export function addPokemon(pokemon) {
	pokemonData.push(pokemon);
}

export default pokemonData;