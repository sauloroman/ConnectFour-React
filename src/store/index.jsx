import { configureStore } from "@reduxjs/toolkit";
import activePlayerSlice from "./slices/activePlayer.slice";
import boardSlice from "./slices/board.slice";
import playersSlice from "./slices/players.slice";
import startSlice from "./slices/start.slice";
import typeOfGameSlice from "./slices/typeOfGame.slice";

export default configureStore({
  reducer: {
    board: boardSlice,
    activePlayer: activePlayerSlice,
    typeOfGame: typeOfGameSlice,
    players: playersSlice,
    startGame: startSlice
  }
})  