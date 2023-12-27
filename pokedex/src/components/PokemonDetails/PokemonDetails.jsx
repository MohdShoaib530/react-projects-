import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";
import './PokemonDetails.css'

function PokemonDetails() {
  const {id} = useParams();
  const [pokemonDetails,setPokemonDetails] = useState({});
  async function DownloadPokemon() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemonDetails({
      name: response.data.name,
      image: response.data.sprites.other.dream_world.front_default,
      weight: response.data.weight,
      height: response.data.height,
      type: response.data.types.map((type) => type.type.name)
    
    })
  }
  console.log(pokemonDetails.type);

  useEffect(() => {
    DownloadPokemon();
  }, []);

  return (
    <div className="pokemon-details-wrapper">
      <div className="pokemon-details-name">Name: {pokemonDetails.name}</div>
      <div className="pokemon-details-image"><img src={pokemonDetails.image} /></div>
      <div className="height-width">
        <div className="pokemon-details-weight"> Weight: {pokemonDetails.weight}</div>
        <div className="pokemon-details-height"> Height: {pokemonDetails.height}</div> 
      </div>
      <div className="pokemon-details-type" >
        Type: {pokemonDetails.type && pokemonDetails.type.map((type) => <span key={type} className="type">{type}</span>)}
      </div>
    </div>
  )
}

export default PokemonDetails;