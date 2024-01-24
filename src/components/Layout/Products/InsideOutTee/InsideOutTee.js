// import ProfilePicture from './pp-scratch.js';
// import './pp-scratch.scss';
import './InsideOutTee.scss';
import Cart from '../../Cart/cart';
import Footer from '../../footer';
import Hero1 from '../../../../assets/InsideOutTee/Hero.png';
import Hoodie1 from '../../../../assets/InsideOutTee/Tee.png';
import Hoodie_Logo from '../../../../assets/InsideOutTee/TeeLogo.png';
import Hoodie_Detail from '../../../../assets/InsideOutTee/TeeDetail.png';
import Mini_Hoodie from '../../../../assets/InsideOutTee/Tee.png';
import Hoodie_Back from '../../../../assets/InsideOutTee/TeeBackside.png';
import Size from '../../../../assets/InsideOutTee/Size.png';
import Hero2 from '../../../../assets/InsideOutTee/Hero2.png';
import Hero2Preview from '../../../../assets/InsideOutTee/ProfilePicture.png';
import Hero3 from '../../../../assets/InsideOutTee/Hero3.png';
import Related1 from '../../../../assets/InsideOutTee/Related1.png';
import Related2 from '../../../../assets/InsideOutTee/Related2.png';

const InsideOutTee = () =>{
    return (
        <div className='InsideOutTee'>
             <Cart />
            <div className='Product-hero'>
                <img src={Hero1} />
            </div>
            <div className='Product-desc'>
                <p>
                    100% Cotton, This tee Features a                   
                    <br />
                    Heavy-Weight Jersey. Disguised Embroidery<br/>
                    With Boxy, Cropped. Dynamic Inside-Out 
                    <br />
                    Construction and Extra Comfort with a
                    <br />
                    Heavy Garment Wash. Made to Order, Ships
                    <br />
                    March 2024
                </p>
                <span>Toast & Starsmitten both Wearing Medium, BoxBox</span>
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
                    <img src ={Hero2Preview} className="Hero2Preview" />
                    <img src={Hero2} className='Hero2'/>                
                    <img src = {Hero3} className='Hero3'/>
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

export default InsideOutTee;