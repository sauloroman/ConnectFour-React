import { useEffect } from 'react'
import { Menu } from '../../components/loginPage'
import { useReset } from '../../hooks'
import { paintBody } from '../../helpers'
import logoApp from '../../../assets/img/logo-app.png'

export const LoginPage = () => {

  const { onResetTypeOfGame } = useReset();

  useEffect( () => {
    onResetTypeOfGame();
    paintBody(null)
  }, [] )

  return (
    <div className="login container">
      <div className="login__container animate__animated animate__bounceIn">
        <div className="login__logoBox">
          <img 
            src={ logoApp } 
            alt="App logo" 
            className='login__logo'
          />
        </div>

        <Menu />
      </div>
    </div>
  )
}
