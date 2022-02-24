import React from 'react';
import Button from "../Button/Button";

const GameBuy = ({game}) => {
    return (
        <div className="game-buy">
            <span className="game-buy-price">price: {game.price}</span>
            <Button
                type="primary" onClick={()=> null}>
                buy
            </Button>
        </div>
    );
};

export default GameBuy;