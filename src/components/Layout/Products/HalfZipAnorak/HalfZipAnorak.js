import Cart from '../../Cart/cart';
import './HalfZipAnorak.scss';
import Footer from '../../footer';
import ProfilePicture from '../InsideOutTee/pp-scratch';
import Hero1 from '../../../../assets/HalfZipAnorak/Hero.png';
import Hoodie1 from '../../../../assets/HalfZipAnorak/MainProduct.png';
import Hoodie_Detail1 from '../../../../assets/HalfZipAnorak/Preview1.png';
import Hoodie_Detail2 from '../../../../assets/HalfZipAnorak/Preview2.png';
import Hoodie_Back from '../../../../assets/HalfZipAnorak/BacksideProduct.png';
import Size from '../../../../assets/HalfZipAnorak/Size.png';
import Hero2 from '../../../../assets/HalfZipAnorak/Hero2.png';
import Hero2Preview from '../../../../assets/HalfZipAnorak/ProfilePicture.png';
import Hero3 from '../../../../assets/HalfZipAnorak/Hero3.png';
import Related1 from '../../../../assets/HalfZipAnorak/RelatedProduct1.png';
import Related2 from '../../../../assets/HalfZipAnorak/RelatedProduct2.png';

const HalfZipAnorak = () =>{
    return(
        <div className='HalfZipAnorak'>
            <Cart />
                <div className='Product-hero'>
                     <img src={Hero1} className='hero1' />
                 </div>
            <div className='Product-desc'>
                <p>
                    Hooded Anorak Features a Fully Lined                    
                    <br />
                    Interior, Bungee Adjustable Hood and Hem, <br/>
                    Half Zip, and Elasticated Cuffs. Oversize Fit
                    <br />
                    Made to Order, Ships March 2024
                </p>
                <span>Toast & Quarterjade Wearing Medium.</span>
            </div>
                <div className='Main-products'>
                    <img src={ Hoodie1}/>
                    <img src={ Hoodie_Back}/>
                </div>
                <div className='Carousel-preview'>
                    <img src={ Hoodie1}/>
                    <img src={ Hoodie_Detail1}/>
                    <img src={ Hoodie_Detail2}/>
                    <img src={ Hoodie_Back}/>
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
                            <p className='Product-name'>Color Block Hoodie</p>
                            <p className='Product-price'>
                            <span className='price'>$95</span>
                            </p>

                        </div>
                            
                    </div>
                        <div className='Related-2'>
                            <img src={Related2} />
                            <div className='Product-infos'>
                                <p className='Product-name'>Inside Out Waffle</p>
                                <p className='Product-price'>
                                <span className='price'>$40</span>
                                </p>
                            </div>
                     </div>
                    </div>
                </div>
                <Footer />
            </div>
    )
}

export default HalfZipAnorak;