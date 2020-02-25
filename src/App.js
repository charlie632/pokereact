import React from "react";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="pokedex">
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}
