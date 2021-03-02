const baseURL = 'http://pokeapi.co/api/v2';
const query = {
  pokemon: 'pokemon',
};

export async function fetchPokemon(pokemon) {
  console.log(`${baseURL}/${query.pokemon}/${pokemon}`);
  return fetch(`${baseURL}/${query.pokemon}/${pokemon}`);
}
