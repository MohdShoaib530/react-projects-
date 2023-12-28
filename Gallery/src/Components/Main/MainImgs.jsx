import Image from '../Image/Image';
import './MainImgs.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

export function MainImgs() {
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [imagesUrl, setImagesUrl] = useState([]);
  const [url, setUrl] = useState(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=8`);

  const limit = 8;

  function nextPage() {
    setOffset(offset + limit);
    // Update the URL with the new offset
    setUrl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset +limit}&limit=${limit}`);
  }

  function previousPage() {
    if (offset >= limit) {
        setOffset(offset - limit);
      // Update the URL with the new offset
      setUrl(`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset - limit}&limit=${limit}`);
    }
  }

  async function fetchImages() {
    setIsLoading(true);
    try {
      const data = await axios.get(url);
      const imageArray = data.data.photos;
      const imageData = imageArray.map((image) => ({
        id: image.id,
        title: image.title,
        url: image.url,
      }));

      setImagesUrl(imageData);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchImages();
  }, [offset, url]);

  return (
    <div className="image-list-wrapper">
      <Navbar/>,
      <Sidebar/>
      <div className="image-wrapper">
        
        {isLoading ? 'Loading....' :
          imagesUrl.map((p) => 
           <Image src={p.url} key={p.id} id={p.id}/>
        )}
      </div>
      <div className="controls">
        <button disabled={offset <= 0} onClick={previousPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default MainImgs;
