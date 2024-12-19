import { createContext, useEffect, useRef, useState } from "react"
import { useUserQuery } from "../../../entities/account/models/hooks";
import { removeLocalstorage } from "../../../shared/lib/utils";

import PropsTypes from 'prop-types';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('auth_token') || undefined);
  const [userData, setUserData] = useState({});

  const userRef = useRef(false);

  const isAuth = Boolean(token);

  const { user, isError } = useUserQuery();
  
  useEffect(() => {
    if (isError) {
      removeLocalstorage('auth_token');
      setToken(undefined);

      return;
    }
  }, [isError]);

  const getUserData = async () => {
    if (!isAuth) return;
    try {
      const { data } =  await user();

      if (isError) {
        removeLocalstorage('auth_token');
        setToken(undefined);
        alert('Произошла ошибка при получении данных')
      }

      setUserData(data);
    }
    catch (err) {
      console.log('Ошибка при получении пользователя ', err);
      throw err;
    }
  }

  useEffect(() => {
    if (isAuth && userRef.current === false) {
      getUserData();

      userRef.current = true;
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{isAuth, setToken, userData}}>
      {children}
    </AuthContext.Provider>
  )
};

AuthProvider.propTypes = {
  children: PropsTypes.element.isRequired
};