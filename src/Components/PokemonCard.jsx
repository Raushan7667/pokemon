import React from 'react';
import '../../src/App.css'

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="card">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h3 className='name'>{pokemon.name}</h3>
    </div>
  );
};

export default PokemonCard;