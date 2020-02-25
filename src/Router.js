import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PokeHook from "./pages/PokeHooks";
import PokemonPage from "./pages/PokemonPage";
import Header from "./components/Header";

function Router() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <div>
          <Switch>
            <Route path="/" exact>
              <PokeHook />
            </Route>
            <Route path="/pokedex">
              <PokeHook />
            </Route>
            <Route path="/pokemon/:id">
              <PokemonPage />
            </Route>
          </Switch>
        </div>
      </>
    </BrowserRouter>
  );
}

export { Router };

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
