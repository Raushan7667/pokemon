
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './Components/PokemonCard';



const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
      const fetchedPokemons = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const result = await axios.get(pokemon.url);
          return result.data;
        })
      );
      setPokemons(fetchedPokemons);
    };
    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className='name'>Pokemon List</h1>
      <input
        type="text"
        placeholder="Search Pokémon..."
        onChange={(e) => setSearchTerm(e.target.value)}
       
      />
      <div className="pokemon-list">
        {filteredPokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;

