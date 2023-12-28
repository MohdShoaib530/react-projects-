import { Link } from 'react-router-dom';
import reactLogo from '../../assets/react.svg'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
        <div className='navbar-line'>
           <div className="navbar__logo">
               <img src={reactLogo} className="logo-react" alt="React logo" /> 
           </div>
           <div className="navbar__search">
               <input type="text" className="search__input" placeholder="Search Your Photos" />
           </div>
           <div className="navbar__menu">
               <ul className="menu__list">
                   <Link to={'/'}>
                   <li className="menu__item">Home</li>
                   </Link>
                   <li className="menu__item">About</li>
                   <li className="menu__item">Contact</li>
               </ul>
           </div>
           <div className='line'>

           </div>
        </div>
        
    </nav>
  );
}

export default Navbar;
