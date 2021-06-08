import { useState } from "react";

export default function useContextStates() {
  const [pokemon, setPokemon] = useState();

  const onSubmitPost = async (data) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/Bulbasaur`);
    const poke = await response.json();
    setPokemon();
  };

  return {
    onSubmitPost,
  };
}
