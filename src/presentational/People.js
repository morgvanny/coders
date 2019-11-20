import React from "react";
import Coder from "./Coder";

const People = props => {
  const coders = props.coders.map(coder => {
    return (
      <Coder name={coder.name} key={coder.name} language={coder.language} />
    );
  });

  return <ul>{coders}</ul>;
};

export default People;
