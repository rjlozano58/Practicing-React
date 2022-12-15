import React from "react";
import "./styles.css";

function Pokemon(props) {
  return (
    <div className="container">
      <h2>{props.name}</h2>
      <h6>{props.type}</h6>
      <img alt="Pokemon" src={props.image} />
    </div>
  );
}

export default Pokemon;
