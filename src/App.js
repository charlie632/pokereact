import React from "react";
import "./styles.css";
import PokeClasses from "./PokeClass";
import PokeHooks from "./PokeHooks";

export default function App() {
  return (
    <div className="App">
      <p>Instructions in README.md</p>
      <h1>Kewl Pokèdex</h1>
      <div className="pokedex">
        <div className="class-pokedex">
          <h3>PokeClasses!</h3>
          <PokeClasses />
        </div>

        <div className="hooks-pokedex">
          <h3>PokeHooks!</h3>
          <PokeHooks />
        </div>
      </div>
    </div>
  );
}
