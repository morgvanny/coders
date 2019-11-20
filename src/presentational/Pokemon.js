import React from "react";
const Pokemon = ({ name, img }) => (
  <div>
    <h2>{name}</h2>
    <img src={img} />
  </div>
);
export default Pokemon;
