import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PokeHook() {
  const [pokemons, setPokemons] = useState([]);

  // First fetch the names
  useEffect(() => {
    async function fetchName() {
      let res = await fetch("https://pokeapi.co/api/v2/pokemon").then(
        response => response.json()
      );
      setPokemons(res.results);
    }

    fetchName();
  }, []);

  // This is called when the `pokemons` variable changes
  useEffect(() => {
    async function fetchPokemons() {
      let promises = [];
      for (let p of pokemons) {
        promises.push(fetch(p.url).then(res => res.json()));
      }

      // Waits for all images to fetch
      // To Do: do it async
      let results = await Promise.all(promises);
      let newPoke = results.map((k, i) => {
        return { ...pokemons[i], img: k.sprites.front_shiny };
      });

      setPokemons(newPoke);
    }
    if (pokemons.length > 0) {
      fetchPokemons();
    }
  }, [pokemons]);

  return pokemons.map((pokemon, i) => (
    <div key={i} className="card">
      <Link to={`/pokemon/${pokemon.name}`}>
        <img src={pokemon.img} alt="" />
        <p>{pokemon.name}</p>
      </Link>
    </div>
  ));
}

export default PokeHook;
