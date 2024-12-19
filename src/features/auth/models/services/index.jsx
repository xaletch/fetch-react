import { API } from "../../../../shared/api";

export const authService = () => {
  const login = async (data) => {
    try {
      const res = await API.post('email/login', data);

      return res;
    }
    catch (err) {
      console.log('Не удалось выполнить запрос ', err);
      throw err;
    }
  };

  const register = async (data) => {
    try {
      const res = await API.post('email/register', data);

      return res;
    }
    catch (err) {
      console.log('Не удалось выполнить запрос ', err);
      throw err;
    }
  };
  
  return { login, register }
}