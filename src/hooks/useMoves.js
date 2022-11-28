import { useDispatch } from "react-redux";
import { switchPlayer } from "../store/slices/activePlayer.slice";
import { determineTie, determineWinner, insertPiece } from "../store/slices/board.slice";

export const useMoves = () => {
  const dispatch = useDispatch();

  const newBoard = () => {
    dispatch(determineTie());
    dispatch(determineWinner());
    dispatch(switchPlayer());
  }

  const onSelectColumn = (column, idColumnParam, activePlayerParam) => {
    if (column[0] !== "Player1" && column[0] !== "Player2") {
      dispatch(insertPiece({ id: idColumnParam, activePlayer: activePlayerParam }));
      newBoard();
    }
  }

  const onRandomMove = (idRandom ) => {
    dispatch( insertPiece({ id: idRandom, activePlayer: 'Player2'}));
    newBoard();
  }

  return {
    onSelectColumn,
    onRandomMove
  }

}
