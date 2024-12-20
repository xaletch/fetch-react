import { API } from "../../../../shared/api";

export const updateUserService = () => {
  const updateUser = async (data, token) => {
    try {
      const res = await API.put('user', data, token);

      return res;
    }
    catch (err) {
      console.log('Не удалось обновить данные ', err);
      throw err;
    }
  };
  const uploadFile = async (data, token) => {
    try {
      const res = await API.post('user/upload', data, token);

      return res;
    }
    catch (err) {
      console.log('Не удалось загрузить файл ', err);
      throw err;
    }
  };

  return { updateUser, uploadFile };
}