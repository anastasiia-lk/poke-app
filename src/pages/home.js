import React, { useState } from 'react';
import Search from '../components/Search';
import PokemonData from '../components/PokemonData';
import { fetchPokemon } from '../services/getPokemon';
import { Spinner, Alert } from 'react-bootstrap';

const spinnerStyle = {
  width: '10rem',
  height: '10rem',
  borderWidth: '1rem',
};

const spinnerWrapperStyle = {
  textAlign: 'center',
  marginTop: '50px',
};

export default function HomePage() {
  const [pokemon, setPokemon] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const getPokemon = async (query) => {
    if (!query) {
      setErrorMsg('You must enter a Pokemon');
      setError(true);
      return;
    }
    setError(false);
    setLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query);
        // console.log(response);
        const results = await response.json();
        // console.log(results);
        console.log(results.sprites);
        setPokemon(results);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
        setErrorMsg('Pokemon not found.');
      }
    }, 1500);
  };
  return (
    <div>
      {error ? <Alert variant="danger">{errorMsg}</Alert> : null}
      <Search getPokemon={getPokemon} />
      {loading ? (
        <div style={spinnerWrapperStyle}>
          <Spinner style={spinnerStyle} animation="border" />
        </div>
      ) : null}
      {!loading && pokemon ? (
        <PokemonData
          name={pokemon.name}
          sprite={pokemon.sprites.front_default}
          abilities={pokemon.abilities}
          types={pokemon.types}
          // order={pokemon.order}
          stats={pokemon.stats}
          // moves={pokemon.moves}
        />
      ) : null}
    </div>
  );
}
