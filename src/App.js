import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./Clock";
import PeopleForm from "./PeopleForm";
import People from "./presentational/People";
import PokemonContainer from "./container/PokemonContainer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPeople: true,
      people: [
        { name: "Nica", language: "React" },
        { name: "Ahmed", language: "Ruby" },
        { name: "Audrea", language: "Python" },
        { name: "Baron", language: "Elixer" }
      ]
    };
  }
  // state = {
  //   showPeople: true,
  //   people: [
  //     { name: "Nica", language: "React" },
  //     { name: "Ahmed", language: "Ruby" },
  //     { name: "Audrea", language: "Python" },
  //     { name: "Baron", language: "Elixer" }
  //   ]
  // };

  addPerson = person => {
    this.setState(prevState => {
      return { people: [...prevState.people, person] };
    });
  };

  togglePeople = () => {
    this.setState(prevState => {
      return { showPeople: !prevState.showPeople };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PokemonContainer />
          <Clock />

          <button onClick={this.togglePeople}>
            {this.state.showPeople ? "hide" : "show"}
          </button>
          {this.state.showPeople ? (
            <div>
              <People coders={this.state.people} />
              <PeopleForm addPerson={this.addPerson} />
            </div>
          ) : null}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
