import Image1 from "./Images";
import Name from "./Name";
import './App.css';

function DogCart({name,image}){
    const title = "this is a cute dog";
    return(
        <div>
            <h2 style={
                {
                    fontSize:"larger",
                    color:"greenYellow"
                }
                }>{title}
            </h2>
            <Name>
              <h3>{name}</h3>
            </Name>
            <Image1 src={image}/>
        </div>
    )
}

export function Navbar() {
    return (
      <nav >
        <ul ClassName="Header">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  };

export default DogCart;


