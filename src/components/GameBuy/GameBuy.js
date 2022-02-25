import React from 'react';
import Button from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addItemsInCart, deleteItemsFromCart} from "../../redux/Cart/Reducer";


const GameBuy = ({game}) => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.itemsInCart)
    const isItemInCart = items.some(item => item.id === game.id)


    const handleClick = (event) => {
      event.stopPropagation()
        if(isItemInCart){
            dispatch(deleteItemsFromCart(game.id))
        }else {
            dispatch(addItemsInCart(game))

        }
    }

    return (
        <div className="game-buy">
            <span className="game-buy-price">price: {game.price}</span>
            <Button
                type={isItemInCart? "secondary" : "primary"} onClick={handleClick}>
                {isItemInCart ? "remove": "buy"}
            </Button>
        </div>
    );
};

export default GameBuy;





