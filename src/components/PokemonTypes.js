import React from "react";

function PokemonTypes(props) {
  return (
    <div>
      <h6>Type:</h6>
      <p>{props.type}</p>
      <h6>Weakness:</h6>
      <p>{props.weakness}</p>
    </div>
  );
}

export default PokemonTypes;
