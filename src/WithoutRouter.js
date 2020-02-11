import React, { useState } from "react";
import PokeHook from "./PokeHooks";
import PokeClass from "./PokeClass";

function WithoutRouter() {
  let [selected, setSelected] = useState("home");

  if (selected === "home") {
    return (
      <div>
        <h2>Click the page you want to go!</h2>
        <ul>
          <li>
            <button onClick={() => setSelected("classes")}>PokeClasses</button>
          </li>
          <li>
            <button href="#" onClick={() => setSelected("hooks")}>
              PokeHooks
            </button>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <button onClick={() => setSelected("home")}>back</button>
      {selected === "classes" && <PokeClass />}
      {selected === "hooks" && <PokeHook />}
    </div>
  );
}

export { WithoutRouter };
