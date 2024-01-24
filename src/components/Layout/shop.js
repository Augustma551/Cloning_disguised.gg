import './shop.scss';
import Photo1 from '../../assets/ShopNow/pict1.png';
import Photo2 from '../../assets/ShopNow/pict2.png';
import Photo3 from '../../assets/ShopNow/pict3.png';
import Photo4 from '../../assets/ShopNow/pict4.png';
import {BrowserRouter, Link} from 'react-router-dom';
// import ColorBlackHoodie from './Products/ColorBlackHoodie/ColorBlackHoodie';

const Shop = () =>{
    return(
        <div className="Shop">
     
            <h1>
                Shop Now            
                </h1>
                <div className='img-group'>

                    <div className='row'>
                    <Link to="/ColorBlackHoodie">
                        <div className='img-container group-1' >
                                <img src = {Photo1} />
                        </div>
                        <div className="desc-1">
                            <p className="product-name">Color Black Hoodie</p>
                            <p className="price">$95</p>
                         </div>
                    </Link>

                    <Link to ='/HalfZipAnorak'>
                        <div className='img-container group-1'>
                            <img src = {Photo2} />
                            </div>
                            <div className="desc-2">

                            <p className="product-name">Half Zip Anorak</p>
                            <p className="price">$130</p>
                        </div>
                    </Link>

                    </div>


                    <div className='row'>
                    <Link to ="/InsideOutTee">
                        <div className='img-container group-2'>
                            <img src = {Photo3}/>
                            </div>
                            <div className="desc-3">
                            <p className="product-name">Inside Out Tea</p>
                            <p className="price">$40</p>
                        </div>
                    </Link>

                    <Link to ="/InsideOutWaffle">
                        <div className='img-container group-2 rotate'>
                         <  img src = {Photo4} />
                         </div>
                         <div className="desc-4">
                         <p className="product-name">Inside Out Waffle</p>
                        <p className="price">$55</p>
                        </div>
                    </Link>
                    </div>

                    
                </div>
        </div>
    )
}

export default Shop;