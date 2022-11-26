import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ConnectControls, ConnectScore, ConnectBoard, ConnectWinner, ConnectTurn } from "./";
import { addVictoryPlayer1, addVictoryPlayer2 } from "../../store/slices/players.slice";
import { shootStars, paintBody, shootFire } from "../../helpers";

export const ConnectGame = () => {

  const { winner, tie } = useSelector( store => store.board );
  const dispatch = useDispatch();

  useEffect( () => {
    paintBody( winner );

    if ( winner !== null ) {
      shootFire();      
      if ( winner === 'Player1') {
        dispatch( addVictoryPlayer1() );
      } else if ( winner === 'Player2') {
        dispatch( addVictoryPlayer2() );
      } 
    } 
  }, [ winner ]);

  useEffect( () => {
    if ( tie ) {
      shootStars();
    }
  }, [ tie ] )

  return (
    <>
      <ConnectControls />

      <div className="connect__grid">
        <div className="connect__scoreContainer">
          <ConnectScore type="1" player="JUG 1" />
          <ConnectScore type="2" player="JUG 2" />
        </div>

        <ConnectBoard />
      </div>

      { (winner || tie) ? <ConnectWinner /> : <ConnectTurn /> }
    </>
  );
};
