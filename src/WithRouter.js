import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import PokeHook from "./PokeHooks";
import PokeClass from "./PokeClass";
// import { useParams, withRouter } from "react-router";

function WithRouter() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <div>
              <h2>Click the page you want to go!</h2>
              <ul>
                <li>
                  <Link to="/classes">PokeClasses</Link>
                </li>
                <li>
                  <Link to="/hooks">PokeHooks</Link>
                </li>
              </ul>
            </div>
          </Route>
          <Route path="/hooks">
            <Link to="/">back</Link>
            <PokeHook />
          </Route>
          <Route path="/classes">
            <Link to="/">back</Link>
            <PokeClass />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export { WithRouter };

/**
 * 
 * 
 * 
 function PokemonPage(props) {
  let { id } = useParams();
  return <div>this is pokemon {id}</div>;
}

class PokemonPageClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{JSON.stringify(this.props, null, 2)}</div>;
  }
}

let PokemonPageClassH = withRouter(PokemonPageClass);
 
<Route path="/pokemon/:id">
            <PokemonPage />
          </Route>
          <Route path="/pokemon2/:id">
            <PokemonPageClassH />
          </Route>
 */
