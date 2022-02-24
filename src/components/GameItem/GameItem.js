import React from 'react';
import "./GameItem.css"
import GameCover from "../GameCover/GameCover";
import GameBuy from "../GameBuy/GameBuy";
import GameGenre from "../GameGenre/GameGenre";

const GameItem = ({game}) => {
    return (
        <div className="game-item">
            <GameCover image={game.image}/>
           <div className="game-item-details">
               <span className="game-item-title">{game.title}</span>
               <div className="game-item-genre">
                   {game.genres.map((genre)=>
                       <GameGenre genre={genre} key={genre}/>
                   )}
               </div>
               <div className="game-item-buy">
                   <GameBuy game={game}/>
               </div>
           </div>
        </div>
    );
};

export default GameItem;