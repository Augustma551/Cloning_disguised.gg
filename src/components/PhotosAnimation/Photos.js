import './Photos.scss';
import React from "react";
import PhotoOne from "../../assets/PhotosPotrait/Photo1.png";
import PhotoTwo from "../../assets/PhotosPotrait/Photo2.png";
import PhotoThree from "../../assets/PhotosPotrait/Photo3.png";


const PhotosAnimation = () =>{
    return(
        <div className="photos">
                <img src={PhotoOne} className='photo-1'/>
                <img src={PhotoTwo} className='photo-2'/>
                <img src={PhotoThree} className='photo-3'/>

        </div>
    )
}


export default PhotosAnimation;