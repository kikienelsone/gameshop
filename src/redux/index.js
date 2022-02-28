import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./Cart/Reducer";
import gamesReducer from "./Games/Reducer";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        game: gamesReducer,
    }
})