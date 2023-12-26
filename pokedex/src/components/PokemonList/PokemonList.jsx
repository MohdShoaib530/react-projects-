import { useEffect, useState } from "react";
import axios from "axios";
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";

function PokemonList() {
    const [pokemonList,setPokemonList] = useState([]);
    const [isLoading,setIsLoading] = useState(true)
    
    const [pokedexUrl,setUrl] = useState("https://pokeapi.co/api/v2/pokemon")

    const [nextUrl,setNextUrl] = useState('')
    const [prevUrl,setPrevUrl] = useState('')

    async function fetchData() {
        setIsLoading(true)
        const response = await axios.get(pokedexUrl);
        console.log(response.data);
        setNextUrl(response.data.next)
        setPrevUrl(response.data.previous)
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
  }, [pokedexUrl]);

  return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper">
               {(isLoading) ? 'Loading....'  : 
               pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id}/>)
               }
            </div>
            <div className="controls">
                <button disabled={prevUrl == undefined} onClick={() => setUrl(prevUrl)} >Prev</button>
                <button disabled={nextUrl == undefined} onClick={() => setUrl(nextUrl)} >Next</button>
            </div>
        </div>
    );
}

export default PokemonList;
