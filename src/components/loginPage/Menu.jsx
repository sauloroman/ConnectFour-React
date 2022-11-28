import computer from '../../../assets/img/computer.png';
import happyFaces from "../../../assets/img/smile.png";
import rules from "../../../assets/img/rules.png";
import { useGoPage } from '../../hooks';
import { useDispatch } from 'react-redux';
import { setTypeOfGame } from '../../store/slices/typeOfGame.slice';

export const Menu = () => {

  const dispatch = useDispatch();
  const { onGoPage } = useGoPage();

  const onStartGame = (type, url) => {
    dispatch( setTypeOfGame(type) );
    onGoPage( url );
  }

  return (
    <nav className="login__menu">
      <ul className="login__list">
        <li className="login__item login__item--pink animate__animated animate__fadeInRight">
          <button 
            onClick={ () => onStartGame('cpu', '/connect/playGame') }
            className="login__link" 
            >JUGADOR vs CPU</button>
          <img 
            src={ computer } 
            alt="Laptop, yellow screen" 
            className="login__icon"
          />
        </li>
        <li className="login__item login__item--yellow animate__animated animate__fadeInLeft">
          <button 
            onClick={ () => onStartGame('multiplayer', '/connect/playGame') }
            className="login__link" 
            >JUGADOR 1 vs JUGADOR 2</button>
          <img 
            src={ happyFaces } 
            alt="Happy faces" 
            className="login__icon"
          />
        </li>
        <li className="login__item login__item--white animate__animated animate__fadeInRight">
          <button 
            onClick={ () => onGoPage("/rules") }
            className="login__link">Reglas del juego</button>
          <img 
            src={ rules } 
            alt="Advisement sign with a hand" 
            className="login__icon"
          />
        </li>
      </ul>
    </nav>
  )
};
