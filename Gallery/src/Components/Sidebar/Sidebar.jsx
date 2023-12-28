import {  } from "react-icons/fa";
import { FaPhotoFilm,FaSearchengin,FaRegStar,FaBoxArchive,FaTrashCan      } from "react-icons/fa6";
import { IoMdPeople,IoMdAlbums,IoIosCheckboxOutline,IoMdLock   } from "react-icons/io";
import { CiCloud } from "react-icons/ci";
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
           <div>
              <span><FaPhotoFilm/> Photos</span>
           </div>
           <div>
              <span><FaSearchengin/> Search</span>
           </div>
           <div>
              <span><IoMdPeople/> Share</span>
           </div>
           <span>Library</span>
           <div>
              <span><FaRegStar/> Favourite</span>
           </div>
           <div>
              <span><IoMdAlbums/> Albums</span>
           </div>
           <div>
              <span><IoIosCheckboxOutline/> Utilities</span>
           </div>
           <div>
              <span><FaBoxArchive />Archive</span>
           </div>
           <div>
              <span><IoMdLock/>Locked Folder</span>
           </div>
           <div>
              <span><FaTrashCan/>Bin</span>
           </div>
           <div>
              <span><CiCloud/>Storage</span>
           </div>
           
        </div>
    );
};

export default Sidebar;
