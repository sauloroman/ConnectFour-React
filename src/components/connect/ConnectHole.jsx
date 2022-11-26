import { useSelector } from "react-redux";

export const ConnectHole = ({ value, i, j }) => {

  const {winnerMove} = useSelector( store => store.board )

  return (
    <div 
      className={`
        hole 
        ${ (value === 'Player1' || value === 'Player2') ? `hole--${value}` : 'hole--empty'}
        ${ winnerMove?.includes(`${i}${j}`) && 'hole--winner animate__animated animate__pulse animate__infinite' }
      `}
    ></div>
  )
}
