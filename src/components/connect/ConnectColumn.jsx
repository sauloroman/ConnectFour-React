import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchPlayer } from "../../store/slices/activePlayer.slice";
import { addQuantityOfMoves, determineTie, determineWinner, insertPiece } from "../../store/slices/board.slice";

import { ConnectHole } from "./ConnectHole";

export const ConnectColumn = React.memo( ({ column, id }) => {

  const dispatch = useDispatch();
  const activePlayer = useSelector( store => store.activePlayer );
  const {winner, tie} = useSelector( store => store.board )

  const onSelectColumn = () => {
  
    // SI LA FILA YA ESTÁ LLENA ENTONCES NO CAMBIA SE APLICA ESTOS PASOS
    if ( column[0] !== 'Player1' && column[0] !== 'Player2' ) {
      dispatch( insertPiece( {id, activePlayer} ) );
      dispatch( determineTie() );
      dispatch( determineWinner() );
      dispatch( addQuantityOfMoves() );
      dispatch( switchPlayer() ); 
    }

  }  

  return (
    <button 
      disabled={ (winner || tie) ? true : false }
      onClick={ onSelectColumn } 
      className="column"
    >
      {
        column.map( (value, i) => (
          <ConnectHole key={ i } value={ value } i ={ id } j = {i}/>
        ))
      }
    </button>
  )
})
