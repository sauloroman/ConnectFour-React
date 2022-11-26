import { useGoPage } from "../../hooks/useGoPage"

export const RulesPage = () => {

  const { onGoPage } = useGoPage();

  return (
    <div className="rules container">
      <div className="rules__container animate__animated animate__bounceIn">
        <h1 className="rules__heading-primary">Reglas</h1>

        <div className="rules__objective">
          <h2 className="rules__heading-secondary">Objetivo</h2>
          <p className="rules__objective-text">Se el primer jugador en conectar 4 discos del mismo color en una fila ( tanto en horizontal, vertical o diagonal ).</p>
        </div>

        <div className="rules__how">
          <h2 className="rules__heading-secondary">¿Cómo jugar?</h2>
          <ol className="rules__list">
            <li className="rules__item">Las fichas rojas comienzan con la primera jugada.</li>
            <li className="rules__item">Los jugadores deben alternar turnos y solo se puede colocar una ficha en cada turno.</li>
            <li className="rules__item">Tienes 30 segundos para hacer tu movimiento.</li>
            <li className="rules__item">El juego termina cuando algun jugador logra 4 fichas en línea.</li>
            <li className="rules__item">El jugador que comenzo en el juego previo va de segundo en el siguiente.</li>
          </ol>
        </div>

        <button
          onClick={ () => onGoPage('/') }
          className="rules__button">
          <i className='bx bx-left-arrow-alt rules__button-icon'></i>
        </button>
        
      </div>
    </div>
  )
}
