import { useEffect, useState } from "react";
import axios from "axios";
import "./PokemonList.css";
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {
  // const [pokemonList,setPokemonList] = useState([]);
  // const [isLoading,setIsLoading] = useState(true)

  // const [pokedexUrl,setUrl] = useState("https://pokeapi.co/api/v2/pokemon")

  // const [nextUrl,setNextUrl] = useState('')
  // const [prevUrl,setPrevUrl] = useState('')

  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    isLoading: true,
    pokedexUrl: "https://pokeapi.co/api/v2/pokemon",
    nextUrl: "",
    prevUrl: "",
  });
  async function fetchData() {
    setPokemonListState((prevState) => ({ ...prevState, isLoading: true }));
  
    try {
      const response = await axios.get(pokemonListState.pokedexUrl);
      setPokemonListState((prevState) => ({
        ...prevState,
        nextUrl: response.data.next,
        prevUrl: response.data.previous,
      }));
  
      const pokemonResult = response.data.results;
      const pokemonResultPromise = pokemonResult.map((pokemon) =>
        axios.get(pokemon.url)
      );
  
      const pokemonData = await axios.all(pokemonResultPromise);
  
      const result = pokemonData.map((pokeData) => {
        const pokemon = pokeData.data;
        return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other.dream_world.front_default,
          types: pokemon.types,
        };
      });
  
      setPokemonListState((prevState) => ({
        ...prevState,
        pokemonList: result,
        isLoading: false,
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
      setPokemonListState((prevState) => ({ ...prevState, isLoading: false }));
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [pokemonListState.pokedexUrl]);


  return (
    <div className="pokemon-list-wrapper">
      <div className="pokemon-wrapper">
        {pokemonListState.isLoading
          ? "Loading...."
          : pokemonListState.pokemonList.map((p) => (
              <Pokemon name={p.name} image={p.image} key={p.id} id={p.id} />
            ))}
      </div>
      <div className="controls">
        <button
          disabled={pokemonListState.prevUrl == undefined}
          onClick={() => setPokemonListState({...pokemonListState,
            pokedexUrl: pokemonListState.prevUrl,
          })}
        >
          Prev
        </button>
        <button disabled={pokemonListState.nextUrl == undefined} onClick={ () => setPokemonListState({...pokemonListState,
            pokedexUrl: pokemonListState.nextUrl,
          }) }>
          Next
        </button>
      </div>
    </div>
  );
}

export default PokemonList;
