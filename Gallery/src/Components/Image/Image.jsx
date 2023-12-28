import './Image.css'
import {Link} from 'react-router-dom';

function Image({src,id}){
    return(
        <Link to={`image/${id}`}>
           <div className="image-wrapper">
               <img src={src} alt="Images" className='image'/>
           </div>
           
        </Link>
    )
}

export default Image;