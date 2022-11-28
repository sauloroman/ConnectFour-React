import { useEffect } from "react";
import { useSelector } from "react-redux"
import { ConnectColumn } from "./ConnectColumn";
import { useMoves } from "../../hooks";
import { moveCPU } from "../../helpers";

export const ConnectBoard = () => {

  const {board, winner } = useSelector( store => store.board );
  const activePlayer = useSelector( store => store.activePlayer );
  const typeOfGame = useSelector( store => store.typeOfGame );
  const { onRandomMove } = useMoves();

  useEffect( () => {
    if ( !winner ) {
      if ( typeOfGame === 'cpu' && activePlayer === 'Player2' ) {
        const bestColumn = moveCPU( board );
        onRandomMove( bestColumn );
      }
    }
  }, [activePlayer] )
  
  return (
    <div className="board animate__animated animate__bounceIn">
      <div className="board__grid">
        {
          board.map( (column, i) => (
            <ConnectColumn 
              key={ i } 
              column={column}
              id={ i }
            />
          ))
        }
      </div>
    </div>
  )
}
