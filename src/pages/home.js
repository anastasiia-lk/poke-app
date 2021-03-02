import React from 'react';
import Search from '../components/Search';
import { fetchPokemon } from '../services/getPokemon';

export default function HomePage() {
  const getPokemon = async (query) => {
    const response = await fetchPokemon(query);
    console.log(response);
  };
  return (
    <div>
      <Search getPokemon={getPokemon} />
    </div>
  );
}
