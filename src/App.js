import React from "react";
import "./styles.css";
import { WithoutRouter } from "./WithoutRouter";
import { BrowserRouter } from "react-router-dom";
import { WithRouter } from "./WithRouter";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <p>Instructions in README.md</p>
        <h1>Kewl Pokèdex</h1>
        <div className="pokedex">
          {/* <WithoutRouter /> */}
          <WithRouter />
        </div>
      </div>
    </BrowserRouter>
  );
}
