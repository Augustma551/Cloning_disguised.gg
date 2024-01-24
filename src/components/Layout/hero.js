import './hero.scss';
import MainImage from "../../assets/landscape.png";
import Potrait from "../../assets/PhotosPotrait/Photo5.png"

const Hero = () =>{
    return (
        <div className="Hero">
            <img src={MainImage} className='main'/>
            <img src={Potrait} className='potrait'/>
        </div>
    )
}

export default Hero