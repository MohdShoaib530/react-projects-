import Image1 from "./Images";
import Name from "./Name";

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

export default DogCart;


