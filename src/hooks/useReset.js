import { useDispatch } from "react-redux";

import { resetBoard } from "../store/slices/board.slice";
import { resetTypeOfGame } from "../store/slices/typeOfGame.slice";
import { resetActivePlayer } from "../store/slices/activePlayer.slice";
import { resetStartGame } from "../store/slices/start.slice";
import { resetPlayers } from "../store/slices/players.slice";

export const useReset = () => {

  const dispatch = useDispatch();

  const onResetGame = () => {
    dispatch( resetBoard() );
    dispatch( resetActivePlayer() )
    dispatch( resetStartGame() );
  }

  const onResetApp = () => {
    onResetGame();
    dispatch( resetPlayers() );
  }
  
  const onResetTypeOfGame = () => {
    onResetGame();
    onResetApp();
    dispatch( resetTypeOfGame() );
  }

  return {
    onResetGame,
    onResetApp,
    onResetTypeOfGame
  }
}
