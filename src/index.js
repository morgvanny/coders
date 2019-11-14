import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const names = ["Nica", "Ahmed", "Audrea", "Baron"];
const coders = [
  { name: "Nica", language: "React" },
  { name: "Ahmed", language: "Ruby" },
  { name: "Audrea", language: "Python" },
  { name: "Baron", language: "Elixer" }
];
ReactDOM.render(
  <App names={names} people={coders} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
