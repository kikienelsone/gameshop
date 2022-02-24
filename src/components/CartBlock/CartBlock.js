import React from 'react';
import "./CartBlock.css"
import {BiCartAlt} from "react-icons/bi"



const CartBlock = () => {
    return (
        <div className="cart-block">
            <BiCartAlt size={30} className="cart-block-icon"/>
            <span className="cart-block-total-price">3445</span>
        </div>
    );
};

export default CartBlock;