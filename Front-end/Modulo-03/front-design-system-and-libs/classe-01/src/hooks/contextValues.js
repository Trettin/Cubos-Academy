import { useState, useEffect } from "react";
import { useLocalStorage } from "react-use";

export default function useContextStates() {
  const [pokemon, setPokemon] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [pokemonsInStorage, setPokemonInStorage] = useLocalStorage(
    "pokemons",
    []
  );
  const [open, setOpen] = useState(false);

  useEffect(async () => {
    const pikachuInLocalStorage = pokemonsInStorage.find(
      (poke) => poke.name === "pikachu"
    );
    if (pikachuInLocalStorage) return setPokemon(pikachuInLocalStorage);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
      const {
        name,
        sprites: {
          other: {
            dream_world: { front_default },
          },
        },
        abilities,
      } = await response.json();
      const currentPokemon = {
        name,
        abilities,
        image: front_default,
      };
      setPokemon(currentPokemon);
      setPokemonInStorage([...pokemonsInStorage, currentPokemon]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, open);

  function checkInCache() {
    return pokemonsInStorage.find(
      (poke) => poke.name === inputValue.toLocaleLowerCase()
    );
  }

  async function handleFindPokemon(e) {
    e.preventDefault();
    const result = checkInCache();
    if (result) return setPokemon(result);

    await onSubmit();
  }

  const onSubmit = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${inputValue}`
      );
      const {
        name,
        sprites: {
          other: {
            dream_world: { front_default },
          },
        },
        abilities,
      } = await response.json();
      const currentPokemon = {
        name,
        abilities,
        image: front_default,
      };
      setPokemon(currentPokemon);
      setPokemonInStorage([...pokemonsInStorage, currentPokemon]);
    } catch (error) {
      console.log(error);
      setOpen(true);
    }
  };

  return {
    pokemon,
    inputValue,
    setInputValue,
    handleFindPokemon,
    open,
  };
}
