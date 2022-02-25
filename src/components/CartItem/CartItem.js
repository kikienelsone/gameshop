import React from 'react';
import "./CartItem.css"

const CartItem = ({price, key, title}) => {
    return (
        <div className="cart-item">
            <span>{title}</span>
            <div className="cart-item-price">
<span>{price}$</span>
            </div>
        </div>
    );
};

export default CartItem;