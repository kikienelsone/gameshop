import React from 'react';
import {calcTotalPrice} from "../utils";
import Button from "../Button/Button";
import "./CartMenu.css"

const CartMenu = ({items, onClick}) => {

    return (
        <div className="cart-menu">
            <div className="cart-menu-game-list">

                {items.length > 0 ? items.map(game => game.title) : ""}
            </div>
            {items.length > 0 ?
                <div className="cart-menu-arrange">
                    <div className="cart-menu-total-price">
                        <span>total:</span>
                        <span>{calcTotalPrice(items)}$</span>

                    </div>
                    <Button type="primary" size="m" onClick={onClick}>
                        make order
                    </Button>
                </div>
                : null
            }
        </div>
    );
};

export default CartMenu;