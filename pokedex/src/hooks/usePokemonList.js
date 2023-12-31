import { useState, useEffect } from "react";
import axios from "axios";

function usePokemonList(url,type){
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
          console.log('response',response.data.pokemon);
          setPokemonListState((prevState) => ({
            ...prevState,
            nextUrl: response.data.next,
            prevUrl: response.data.previous,
          }));

          if(type){
            setPokemonListState((prevState) => ({
                ...prevState,
                pokemonList: response.data.pokemon.slice(0, 5),
              }));
          } else {

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
          }
      
        } catch (error) {
          console.error('Error fetching data:', error);
          setPokemonListState((prevState) => ({ ...prevState, isLoading: false }));
        }
      };
    
      useEffect(() => {
        fetchData();
      }, [pokemonListState.pokedexUrl]);

        return [pokemonListState, setPokemonListState];
}

export default usePokemonList;