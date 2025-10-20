import PokemonCard from "./PokemonCard";
import './PokemonList.css';

const PokemonList = ({ pokemonData }) => {
    return (
        <div>
            <h1>Lista de Pokémons</h1>

            <div className="pokemon-list">
                {pokemonData.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
}

export default PokemonList;