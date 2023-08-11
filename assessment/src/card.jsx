import React from 'react';
import './card.css';

const Card = ({ data }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2 className="pokemon-name">{data.name}</h2>
                <p className="pokemon-hp">{data.hp} HP</p>
            </div>
            <div className="image-container">
                <img src={data.image_src} alt={data.name} />
            </div>
            <div className="pokemon-moves">
                {data.moves.map(move => <p key={move}>{move}</p>)}
            </div>
        </div>
    );
}

export default Card;
