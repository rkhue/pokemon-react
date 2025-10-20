const pokemonData = [];

export function getPokemonData() {
	return pokemonData;
}

export function addPokemon(pokemon) {
	pokemonData.push(pokemon);
}

export default pokemonData;