import React from 'react';
import './cart.scss';

const Cart = () => {
    return(

        <div className='Cart'>
            <div className='Cart-container'>
                <span className='Cart-brackets'>[</span>
                <span className='Cart-text'>CART: </span>
                <span className='Cart-brackets'>]</span>
            </div>
            <div className='Nightmode-container'>
                <span className='Nightmode-brackets'>[</span>
                <span className='Nightmode-text'>NIGHTMODE: </span>
                <span className='Nightmode-brackets'>]</span>
            </div>
        </div>
    )
    }
    

export default Cart;