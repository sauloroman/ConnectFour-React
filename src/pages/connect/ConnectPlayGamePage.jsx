import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNamePlayer2 } from "../../store/slices/players.slice";
import { ConnectGame, ConnectModal } from "../../components/connect";

export const ConnectPlayGamePage = () => {

  const dispatch = useDispatch();
  const startGame = useSelector( store => store.startGame );
  const typeOfGame = useSelector( store => store.typeOfGame );

  useEffect( () => {
    if ( typeOfGame === 'cpu' ) dispatch( setNamePlayer2('CPU') );
  }, [ typeOfGame ] );

  return (
    <div className="connect">
      {
        startGame === 'yes'
        ? ( <ConnectGame /> )
        : ( <ConnectModal /> )
      }
    </div>
  )
}
