import { useState, useEffect } from "react";
import axios from "axios";
import usePokemonList from "./usePokemonList";

function usePokemonDetails(id) {
    // const { id } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState({});
    async function DownloadPokemon() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemonDetails({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            type: response.data.types.map((type) => type.type.name),
        });

        setPokemonListState((prevState) => ({
            ...prevState,
            url:`https://pokeapi.co/api/v2/type/${pokemonDetails.type ? pokemonDetails.type[0] : "fire"
        }`
        }));
    }
    const [pokemonListState, setPokemonListState] = usePokemonList(true);
    useEffect(() => {
        DownloadPokemon();
    }, []);

    return [pokemonDetails, pokemonListState]
}

export default usePokemonDetails;
