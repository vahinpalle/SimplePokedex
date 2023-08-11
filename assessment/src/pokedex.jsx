import React, { useState } from 'react';
import './pokedex.css';
import pokemon from './pokemon.jsx';
import Card from './card.jsx';  

const Pokedex = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    const handleButtonClick = (pokeName) => {
        setSelectedPokemon(pokeName);
    };

    return (
        <div>
            <div className="header">Pokédex</div>
            <div className="bar"></div>
            <div className="button_section">
                {pokemon.map(poke => (
                    <button
                        key={poke.name}
                        className={`pokemon_buttons ${selectedPokemon === poke.name ? 'active' : ''}`}
                        onClick={() => handleButtonClick(poke.name)}
                    >
                        {poke.name}
                    </button>
                ))}
            </div>
            {selectedPokemon ? (
                <Card data={pokemon.find(p => p.name === selectedPokemon)} />
            ) : (
                <div className="select">Select a Pokémon!</div>
            )}
        </div>
    );
}

export default Pokedex;
