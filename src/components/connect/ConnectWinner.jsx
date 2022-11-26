import { useSelector } from "react-redux"
import { useReset } from "../../hooks";

export const ConnectWinner = () => {
  
  const { player1: { name: namePlayer1 }, player2: { name: namePlayer2 } } = useSelector( store => store.players );
  const { onResetGame } = useReset();
  const { winner, tie } = useSelector( store => store.board );

  return (
    <div className="winner">
      <p className="winner__name">
        { winner && 'Victoria' }
        { tie && 'Nadie ganó' }
      </p>
      {
        winner && <p className="winner__lettering">{ winner === 'Player1' ? namePlayer1 : namePlayer2}</p> 
      }
      {
        tie && <p className="winner__lettering">Empate</p> 
      }
      <button 
        onClick={ onResetGame }
        className="connect__button">Jugar nuevamente</button>
    </div>
  )
}
