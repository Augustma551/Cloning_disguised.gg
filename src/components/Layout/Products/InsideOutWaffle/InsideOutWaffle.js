import './InsideOutWaffle.scss';
import Cart from '../../Cart/cart';
import Footer from '../../footer';
import ProfilePicture from '../InsideOutTee/pp-scratch.js';
import Hero1 from '../../../../assets/InsideOutWaffle/Hero.png';
import Hoodie1 from '../../../../assets/InsideOutWaffle/Tee.png';
import Hoodie_Logo from '../../../../assets/InsideOutWaffle/TeeLogo.png';
import Hoodie_Detail from '../../../../assets/InsideOutWaffle/TeeDetail.png';
import Mini_Hoodie from '../../../../assets/InsideOutWaffle/Tee.png';
import Hoodie_Back from '../../../../assets/InsideOutWaffle/TeeBackside.png';
import Size from '../../../../assets/InsideOutWaffle/Size.png';
import Hero2 from '../../../../assets/InsideOutWaffle/Hero2.png';
import Hero2Preview from '../../../../assets/InsideOutWaffle/ProfilePicture.png';
import Hero3 from '../../../../assets/InsideOutWaffle/Hero3.png';
import Related1 from '../../../../assets/InsideOutWaffle/Related1.png';
import Related2 from '../../../../assets/InsideOutWaffle/Related2.png';

const InsideOutWaffle = () =>{
    return (
        <div className='InsideOutWaffle'>
                <Cart />
            <div className='Product-hero'>
                <img src={Hero1} />
            </div>
            <div className='Product-desc'>
                <p>
                    100% Cotton Gaberdine French Terry Hoodie                    
                    <br />
                    Features a Drawcord Hood, Bold Color <br/>
                    Blocking, and Branded Embroidery. Loose Fit with Ribbed Hem and Cuffs. Made to Order, 
                    <br />
                    Ships
                    <br />
                    March 2024
                </p>
                <span>Toast & Starsmitten both Wearing Medium.</span>
            </div>
                <div className='Main-products'>
                    <img src={ Hoodie1}/>
                    <img src={ Hoodie_Back}/>
                </div>
                <div className='Carousel-preview'>
                    <img src={ Mini_Hoodie}/>
                    <img src={ Hoodie_Back}/>
                    <img src={ Hoodie_Detail}/>
                    <img src={ Hoodie_Logo}/>
                    <img src={ Size} />
                </div>
                <div className='Product-asset'>
                    <img src={Hero2} />                
                    <ProfilePicture Profile={Hero2Preview}  />
                    <img src = {Hero3}/>
                </div>
                <div className='Product-related'>
                    <h1>Related</h1>
                    <div className='Related-container'>
                        <div className='Related-1'>
                        <img src={Related1} />
                        <div className='Product-infos'>
                            <p className='Product-name'>Half Zip Anorak</p>
                            <p className='Product-price'>
                            <span className='price'>$130</span>
                            </p>

                        </div>
                            
                    </div>
                        <div className='Related-2'>
                            <img src={Related2} />
                            <div className='Product-infos'>
                                <p className='Product-name'>Inside Out Waffle</p>
                                <p className='Product-price'>
                                <span className='price'>$55</span>
                                </p>
                            </div>
                     </div>
                    </div>
                </div>
                <Footer />

        </div>
    )
}

export default InsideOutWaffle;