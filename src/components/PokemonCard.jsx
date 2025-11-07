import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
    const typeStyles = {
        grass: { backgroundColor: "#78C850" },
        fire: { backgroundColor: "#F08030" },
        water: { backgroundColor: "#6890F0" },
        bug: { backgroundColor: "#A8B820" },
        normal: { backgroundColor: "#A8A878" },
        poison: { backgroundColor: "#A040A0" },
        electric: { backgroundColor: "#F8D030" },
        psychic: { backgroundColor: "#F85888" },
        rock: { backgroundColor: "#B8A038" },
        ground: { backgroundColor: "#E0C068" },
    };

    const currentTypeStyle = typeStyles[pokemon.type];

    return (
        <div className="pokemon-card" style={currentTypeStyle}>
            <h2>{pokemon.name}</h2>
            <p className="info">{pokemon.info}</p>
            <p className="type">Type: {pokemon.type}</p>
            <p className="power">Power: {pokemon.power}</p>
        </div>
    );
};

export default PokemonCard;
