import './style.css'

import { Link } from "react-router"
import { Container } from "../../../shared/ui"
import { useAuth } from '../../../shared/lib/hooks/isAuth'
import { Account } from '../../../entities/account'
import { removeLocalstorage } from '../../../shared/lib/utils'

const headerList = [];

const hederButtons = [
  {
    name: 'Войти',
    path: '/login'
  },
  {
    name: 'Регистрация',
    path: '/register'
  }
];

export const Header = () => {
  const { isAuth, setToken, userData } = useAuth();

  const logout = () => {
    removeLocalstorage('auth_token');
    setToken('');
  }

  return (
    <Container>
      <div className="header">
        <div className="header__inner">
          <div className='header__links'>
            {/* <Link to={'/'}>Логотип</Link> */}
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
          {isAuth && (
            <div className="header__buttons">
              <Account avatar={userData?.avatar} username={userData?.username} email={userData?.email} />
              <button className='header__buttons-item' onClick={logout}>Выйти</button>
            </div>
          )}
          {!isAuth && (
            <div className="header__buttons">
              {hederButtons.map((item, index) => <Link className="header__buttons-item" to={item.path} key={index}>{item.name}</Link>)}
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}
