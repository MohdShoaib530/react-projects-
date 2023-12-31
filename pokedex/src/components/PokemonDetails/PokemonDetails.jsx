import { useParams } from "react-router-dom";
import './PokemonDetails.css'
import usePokemonDetails from "../../hooks/usePokemonDetails";

function PokemonDetails() {
  const {id} = useParams();
  const [pokemonDetails, pokemonListState] = usePokemonDetails(id)

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
      {
         pokemonDetails.type && pokemonListState.pokemonList &&

        <div>
          more {pokemonDetails.type[0]} type pokeons
          <ul>
            {pokemonListState.pokemonList.map((p) => (
              <li key={p.id}>{p.name}</li>
            ))}
          </ul>
        </div>
      }
    </div>
  )
}

export default PokemonDetails;