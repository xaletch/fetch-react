import { API } from "../../../../shared/api";

export const userService = async (token) => {
  try {
    const res = await API.get('user', {}, token);
    return res;
  }
  catch (err) {
    console.error('Ошибка при запросе пользователя ', err);
    throw err;
  }
}