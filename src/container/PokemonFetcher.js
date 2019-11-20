import React from "react";
import Pokemon from "../presentational/Pokemon";

export default class PokemonFetcher extends React.Component {
  state = {};

  componentDidMount() {
    fetch(this.props.url)
      .then(r => r.json())
      .then(d => this.setState({ img: d.sprites.front_default }));
  }
  render() {
    return (
      <div>
        <Pokemon name={this.props.name} img={this.state.img} />
      </div>
    );
  }
}
