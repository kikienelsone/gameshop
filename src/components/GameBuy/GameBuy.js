import React from 'react';
import Button from "../Button/Button";
import {useDispatch} from "react-redux";
import {addItemsInCart} from "../../redux/Cart/Reducer";

const GameBuy = ({game}) => {
    const dispatch = useDispatch()


    const handleClick = (event) => {
      event.stopPropagation()
        dispatch(addItemsInCart)
    }
    
    return (
        <div className="game-buy">
            <span className="game-buy-price">price: {game.price}</span>
            <Button
                type="primary" onClick={handleClick}>
                buy
            </Button>
        </div>
    );
};

export default GameBuy;