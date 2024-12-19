import './style.css'

import { Link } from "react-router"
import { Container } from "../../../shared/ui"


const headerList = [
  {
    name: 'Главная',
    path: '/'
  }
]

const hederButtons = [
  {
    name: 'Войти',
    path: '/login'
  },
  {
    name: 'Регистрация',
    path: '/register'
  }
]

export const Header = () => {
  return (
    <Container>
      <div className="header">
        <div className="header__inner">
          <div className='header__links'>
            <Link to={'/'}>Логотип</Link>
            <nav>
              <ul className="header__list">
                {headerList.map((item, index) => (
                  <li className="header__list-item" key={index}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="header__buttons">
            {hederButtons.map((item, index) => <Link className="header__buttons-item" to={item.path} key={index}>{item.name}</Link>)}
          </div>
        </div>
      </div>
    </Container>
  )
}
