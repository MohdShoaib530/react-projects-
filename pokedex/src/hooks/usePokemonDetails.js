import { useState, useEffect } from "react";
import axios from "axios";

function usePokemonDetails(id,pokemonName) {
    const [pokemonDetails, setPokemonDetails] = useState({});
    
    async function DownloadPokemon() {
        try {
            let response;
        if(pokemonName){
            response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        } else {
            response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        }
        const similarTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ""}`);
        setPokemonDetails({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            type: response.data.types.map((type) => type.type.name),
            similarType : similarTypes.data.pokemon ? similarTypes.data.pokemon.map((type) => type.pokemon) : [],
        });
        } catch (error) {
            console.log(error);
        }
       
    }
    useEffect(() => {
        DownloadPokemon();
    }, [pokemonName]);
    
    
    return [pokemonDetails]
}

export default usePokemonDetails;
