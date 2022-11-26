import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTimer } from "../../hooks"
import { useDispatch } from "react-redux";
import { switchPlayer } from "../../store/slices/activePlayer.slice";

export const ConnectTurn = () => {

  const dispatch = useDispatch();

  const activePlayer = useSelector( store => store.activePlayer );

  const { player1: { name: namePlayer1}, player2: { name: namePlayer2 }} = useSelector( store => store.players );

  const { counter } = useTimer( 30, activePlayer );

  useEffect( () => {
    if ( counter === 0 ) dispatch( switchPlayer() );
  }, [ counter ] );

  return (
    <div className={`turn--${activePlayer} turn animate__animated animate__fadeInUp`}>
      <p className="turn__name">
        Turno de {activePlayer === 'Player1' ? namePlayer1 : namePlayer2}
      </p>  
      <p className="turn__counter">{counter}s</p>
    </div>
  )
}
