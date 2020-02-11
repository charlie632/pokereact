import React from "react";

export default class PokeClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    };
  }

  async componentDidMount() {
    await fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(data => {
        this.setState({ pokemons: data.results });
      })
      .catch(error => console.log(error));

    let pokemons = this.state.pokemons;
    pokemons.map(pokemon => {
      fetch(pokemon.url)
        .then(res => res.json())
        .then(data => {
          pokemon.img = data.sprites.front_shiny;
          this.setState({ pokemons: pokemons });
        })
        .catch(error => console.log(error));
    });
  }

  render() {
    return this.state.pokemons.map((pokemon, i) => (
      <div key={i}>
        <img src={pokemon.img} alt="" />
        <p className="list-element">{pokemon.name}</p>
      </div>
    ));
  }
}
