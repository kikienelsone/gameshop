import {createSlice} from "@reduxjs/toolkit";
import gamePage from "../../Pages/GamePage/GamePage";

const gameSlice = createSlice({
    name: "games",
    initialState: {
        currentGame: null
    },
    reducers: {
        setCurrentGame: (state, actions) => {
            state.currentGame = actions.payload
        }
    }
})

export const {setCurrentGame} = gameSlice.actions
export default gameSlice.reducer