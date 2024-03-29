import React from 'react';

import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentGame} from "../../redux/Games/Reducer";

import GameCover from "../GameCover/GameCover";
import GameBuy from "../GameBuy/GameBuy";
import GameGenre from "../GameGenre/GameGenre";

import "./GameItem.css"


const GameItem = ({game}) => {


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setCurrentGame(game))
        navigate(`/app/${game.title}`, {replace: true})
    }


    return (
        <div className="game-item" onClick={handleClick}>
            <GameCover image={game.image}/>
            <div className="game-item-details">
                <span className="game-item-title">{game.title}</span>
                <div className="game-item-genre">
                    {game.genres.map((genre) =>
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