import { useEffect, useState } from "react";
import axios from "axios";
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {
    const [pokemonList,setPokemonList] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    
    const POKEDEX_URL = "https://pokeapi.co/api/v2/pokemon"
    async function fetchData() {
        const response = await axios.get(POKEDEX_URL);
        const pokemonResult = response.data.results;
        const pokemonResultPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultPromise);
        console.log(pokemonData);
        const result = pokemonData.map((pokeData) =>  {
            const pokemon = pokeData.data
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                types: pokemon.types
            }
        });
        console.log(result);
        setPokemonList(result);
        setIsLoading(false)
    }
  useEffect(() => {
    fetchData();
  }, []);

  return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper">
               {(isLoading) ? 'Loading....'  : 
               pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id}/>)
               }
            </div>
            <div className="controls">
                <button>Prev</button>
                <button>Next</button>
            </div>
        </div>
    );
}

export default PokemonList;
