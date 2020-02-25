import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PokemonCard from "../components/PokemonCard";

const PokemonPage = () => {
  let { id } = useParams();
  let [error, setError] = useState(null);
  let [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(r => setPokemon(r))
      .catch(e => setError(true));
  }, [id]);

  if (!error && !pokemon) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Pokemon not found!!</div>;
  }

  return <PokemonCard pokemon={pokemon} />;
  // return <div>{JSON.stringify(pokemon, null, 2)}</div>;
};

export default PokemonPage;
