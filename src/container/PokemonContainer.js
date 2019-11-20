import React from "react";
import PokemonFetcher from "./PokemonFetcher";

export default class PokemonContainer extends React.Component {
  state = { pokemon: [] };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then(res => res.json())
      .then(data => this.setState({ pokemon: data.results }));
  }

  render() {
    const pokemon = this.state.pokemon.map(p => {
      return <PokemonFetcher key={p.name} {...p} />;
    });
    return <div>{pokemon}</div>;
  }
}
