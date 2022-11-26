import { useSelector } from "react-redux";
import { ConnectGame, ConnectModal } from "../../components/connect/";;

export const ConnectPlayerVsPlayerPage = () => {

  const startGame = useSelector( store => store.startGame );

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
