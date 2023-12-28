import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./ImageDetail.css";
import Navbar from "../Navbar/Navbar";

function ImageDetail() {
  const { id } = useParams();
  const [ImageDetails, setImageDetails] = useState({});
  async function DownloadImage() {
    const response = await axios.get(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    );
    console.log(response);
    setImageDetails({
      title: response.data.photo.title,
      id: response.data.photo.id,
      url: response.data.photo.url,
      description: response.data.photo.description,
    });
  }

  useEffect(() => {
    DownloadImage();
  }, []);

  return (
    <div className="detail-image">
      <Navbar/>
      <div className="image-margin">
         <h3>{ImageDetails.title}</h3>
         <div className="image-wrap">
            <img src={ImageDetails.url} />
         </div>
         <p>{ImageDetails.description}</p>
      </div>
    </div>
  );
}

export default ImageDetail;
