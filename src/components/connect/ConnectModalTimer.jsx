import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTimer } from "../../hooks/useTimer";
import { setStartGame } from "../../store/slices/start.slice";

export const ConnectModalTimer = () => {
  
  const dispatch = useDispatch();

  const { player1: { name: namePlayer1 } } = useSelector( store => store.players );
  
  const { counter } = useTimer( 5 );

  useEffect( () => {
    if ( counter === 0 ) dispatch( setStartGame("yes") );
  }, [counter] )

  return (
    <>
      <h1 className="modal__heading">El juego comenzará en</h1>

      <div className="modal__timerBox animate__animated animate__pulse animate__infinite">
        <p className="modal__timer">{ counter }</p>
      </div>

      <p className="modal__playerStart">Turno de {namePlayer1}</p>
    </>
  )
}
