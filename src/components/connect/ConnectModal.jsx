import { useSelector } from "react-redux";
import { ConnectAsksForName, ConnectModalTimer } from "./";

export const ConnectModal = () => {

  const { player1, player2 } = useSelector( store => store.players );
  const namePlayer1 = player1.name;
  const namePlayer2 = player2.name;

  return (
    <div className="modal">
      <div className="modal__container animate__animated animate__bounceIn">
        { namePlayer1 && namePlayer2 
          ? (<ConnectModalTimer />)
          : (<ConnectAsksForName />) }
      </div>
    </div>
  )
}
