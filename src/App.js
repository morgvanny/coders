import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Clock from "./Clock";

import People from "./People";
export default class App extends Component {
  state = {
    showPeople: true
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
          <Clock />
          <button onClick={this.togglePeople}>
            {this.state.showPeople ? "hide" : "show"}
          </button>
          {this.state.showPeople ? <People coders={this.props.people} /> : null}
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

// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello world!</p>
//         <ul>
//           {props.names.map(name => {
//             return <li>{name}</li>;
//           })}
//         </ul>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
