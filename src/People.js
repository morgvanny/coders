import React from "react";
import Coder from "./Coder";

export default class People extends React.Component {
  render() {
    const coders = this.props.coders.map(coder => {
      return (
        <Coder name={coder.name} key={coder.name} language={coder.language} />
      );
    });

    return <ul>{coders}</ul>;
  }
}
