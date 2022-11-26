import { useSelector } from "react-redux"
import { ConnectColumn } from "./ConnectColumn";

export const ConnectBoard = () => {

  const {board} = useSelector( store => store.board );
  
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
