import { useSelector } from "react-redux"

export const ConnectScore = ({ type, player }) => {
  
  const { player1, player2 } = useSelector( store => store.players );
  const imagePlayer = `../../../assets/img/player-${type}.png`

  const { name: namePlayer1, victories: victoriesPlayer1 } = player1;
  const { name: namePlayer2, victories: victoriesPlayer2 } = player2;

  return (
    <div className={`connect__score connect__score--${type} animate__animated animate__fadeInDown`}>
      <p className="connect__score-number">{ player === 'JUG 1' ? namePlayer1 : namePlayer2 }</p>
      <p className="connect__score-victories">{ player === 'JUG 1' ? victoriesPlayer1 : victoriesPlayer2 }</p>
      <img 
        className="connect__score-image"
        src={imagePlayer} 
        alt="Image player" />
    </div>
  )
}
