import { Link } from 'react-router-dom';
import './Pokemon.css'
function Pokemon({name,image,id}){
    return (
        <Link to={`pokemon/${id}`}>
           <div className='pokemon'>
              <div className='name'>{name}</div>
              <div ><img src={image} className='pokemonImage'/></div>
           </div>
        </Link>
    )
}
export default Pokemon;