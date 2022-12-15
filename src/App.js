import React from "react";
import "./styles.css";
import Pokemon from "./components/Pokemon.js";
import PokemonTypes from "./components/PokemonTypes.js";

let charizardImg =
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/4/4c/Pokemans_006.gif";
let bulbasaurImg =
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/6/60/Pokemans_001.gif";
let eeveeImg =
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/c/cd/Pokemans_133.gif?width=325";

let imgArr = [charizardImg, bulbasaurImg, eeveeImg];

function App() {
  return (
    <div className="container">
      <h1>Popular Pokemon</h1>
      <div className="pokemon">
        <Pokemon name="Charizard" type="fire, flying" image={imgArr[0]} />
        <Pokemon name="Bulbasaur" type="grass, poison" image={imgArr[1]} />
        <Pokemon name="Eevee" type="normal" image={imgArr[2]} />
      </div>

      <h1>Common Pokemon Types</h1>
      <div className="types">
        <PokemonTypes type="Normal" weakness="Rock" />
        <PokemonTypes type="Fire" weakness="Water" />
        <PokemonTypes type="Water" weakness="Grass" />
        <PokemonTypes type="Grass" weakness="Flying" />
      </div>
    </div>
  );
}

export default App;
