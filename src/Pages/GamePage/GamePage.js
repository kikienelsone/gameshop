import React from 'react';
import "./GamePage.css"
import {useSelector} from "react-redux";
import GameCover from "../../components/GameCover/GameCover";
import GameGenre from "../../components/GameGenre/GameGenre";
import GameBuy from "../../components/GameBuy/GameBuy";

const GamePage = () => {
    const game = useSelector(state => state.game.currentGame)
    console.log(game)
    if (!game) return null
    return (
        <div className="game-page">
            <h1 className="game-page-title">{game.title}</h1>
            <div className="game-page-content">
                <div className="game-page-left">
                    <iframe width="90%"
                            height="400px"
                            src={game.video}
                    >

                    </iframe>

                <div className="game-page-right">
                    <GameCover image={game.image}/>
                    <p>{game.description}</p>
                    <p className="secondary-text">tags</p>
                    {game.genres.map((genre) =>
                        <GameGenre genre={genre} key={genre}/>
                    )}
                    <div className="game-page-buy-game">
                        <GameBuy game={game}/>
                    </div>
                </div>
            </div>
        </div>
</div>
)
    ;
};

export default GamePage;