import { Routes,Route } from "react-router-dom";
import MainImgs from "../Components/Main/MainImgs";
import ImageDetail from "../Components/ImageDetail/ImageDetail";

function ImageRoute(){
    return(
        <Routes>
            <Route path="/" element={ <MainImgs/>} />
            <Route path='/image/:id' element={<ImageDetail/>} />

        </Routes>
    )
}

export default ImageRoute;    
