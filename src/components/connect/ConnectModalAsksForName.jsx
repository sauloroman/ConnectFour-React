import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useForm, useGoPage } from "../../hooks"
import { setNamePlayer1, setNamePlayer2 } from "../../store/slices/players.slice";

export const ConnectAsksForName = () => {

  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const typeOfGame = useSelector( store => store.typeOfGame );
  const { onGoPage } = useGoPage();
  const { namePlayer1, namePlayer2, onInputChange } = useForm({
    namePlayer1: '',
    namePlayer2: '',
  });

  const onSubmitNamePlayers = e => {
    e.preventDefault();

    if ( typeOfGame === 'multiplayer' ) {
      if ( namePlayer1.length <= 2 || namePlayer2.length <= 2 ) {
        setError( true );
  
        setTimeout( () => {
          setError( false );
        }, [ 3000 ] );
  
        return;
      }

      dispatch( setNamePlayer1( namePlayer1 ) );
      dispatch( setNamePlayer2( namePlayer2 ) );

    } else {
      if ( namePlayer1.length <= 2 ) {
        setError( true );
  
        setTimeout( () => {
          setError( false );
        }, [ 3000 ] );
  
        return;
      }

      dispatch( setNamePlayer1( namePlayer1 ) );
    }

  }

  return (
    <>
      <h1 className="modal__heading">Nombres</h1>
      <form onSubmit={onSubmitNamePlayers} className="modal__form">
        {error && (
          <p className="modal__error animate__animated animate__fadeInDown">
            Todos los campos son obligatorios
          </p>
        )}

        <div className="modal__formField">
          <label htmlFor="player1" className="modal__formLabel">
            Nombre del jugador 1
          </label>
          <input
            htmlFor="player1"
            className="modal__input"
            value={namePlayer1}
            onChange={onInputChange}
            name="namePlayer1"
            type="text"
            placeholder="Ingresa nombre..."
          />
        </div>

        {
          typeOfGame === 'multiplayer' && (
            <>
              <div className="modal__formField">
                <label htmlFor="player1" className="modal__formLabel">
                  Nombre del jugador 2
                </label>
                <input
                  htmlFor="player2"
                  className="modal__input"
                  value={namePlayer2}
                  onChange={onInputChange}
                  name="namePlayer2"
                  type="text"
                  placeholder="Ingresa un nombre..."
                />
              </div>
            </>
          )
        }

        <button type="submit" className="modal__button">
          Aceptar
        </button>
      </form>

      <button onClick={() => onGoPage("/")} className="modal__buttonReturn">
        <i className="bx bx-left-arrow-alt rules__button-icon"></i>
      </button>
    </>
  );
};
