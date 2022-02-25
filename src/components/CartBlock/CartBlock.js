import React, {useState} from 'react';
import "./CartBlock.css"
import {BiCartAlt} from "react-icons/bi"
import {useSelector} from "react-redux";
import {calcTotalPrice} from "../utils";
import CartMenu from "../CartMenu/CartMenu";
import ItemsInCart from "../ItemsInCart/ItemsInCart";


const CartBlock = () => {

    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)

    const items = useSelector(state => state.cart.itemsInCart)
    const totalPrice = calcTotalPrice(items)
    return (
        <div className="cart-block">
            <ItemsInCart quantity={items.length}/>
            <BiCartAlt size={30} className="cart-block-icon" onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            {totalPrice > 0 ? <span className="cart-block-total-price">{totalPrice}</span> : null}
            {isCartMenuVisible && <CartMenu items={items} onClick={() => null}/>}
        </div>
    );
};

export default CartBlock;