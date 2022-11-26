import { useGoPage, useReset } from '../../hooks';
import logoApp from '../../../assets/img/logo-app.png'

export const ConnectControls = () => {

  const { onGoPage } = useGoPage();
  const { onResetTypeOfGame, onResetApp } = useReset();

  const onInitApp = () => {
    onResetTypeOfGame();
    onGoPage('/')
  }

  return (
    <header className="connect__header animate__animated animate__bounceIn">
      <button 
        onClick={ onInitApp }
        className="connect__button">Menú</button>
      <div className="connect__logoBox">
        <img 
          src={ logoApp } 
          alt="App logo" 
          className="connect__logo"
        />
      </div>
      <button 
        onClick={ onResetApp }
        className="connect__button">Reiniciar</button>
    </header>
  )
}
