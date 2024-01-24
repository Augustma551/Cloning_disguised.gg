import './main.scss';
import React from 'react';
import Video from '../../assets/Videobg.mp4';
import Logo from '../../assets/logo.png';
import Photos from '../PhotosAnimation/Photos';
import TimePicker from '../TimePicker/Timepicker';

const Main = ()=>{
        return (
            <div className='main'>
                <video src={Video} autoPlay loop muted  playsInline="false" type="video/mp4" />
                    <div className='logo'>
                    <img src= {Logo}/>
                    </div>
                    <TimePicker />
                    <Photos />
            </div>
            
        )
}

export default Main;