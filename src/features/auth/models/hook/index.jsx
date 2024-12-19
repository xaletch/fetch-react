import { useState } from 'react'

export const useForm = (initData, register = false) => {
  const [data, setData] = useState(initData);
  const [error, setError] = useState({});

  const unValidate = (name, value) => {
    if (name === 'email' && value !== '') {
      setError({...error, [name]: ''})
    } else if (name === 'password' && value !== '') {
      setError({...error, [name]: ''});
    } else if (name === 'password' && value.length >= 8 || register && name === 'repeat_password' && value.length >= 8) {
      setError({...error, [name]: ''});
    } else if (register && name === 'repeat_password' && value === data.password) {
      setError({...error, [name]: ''});
    } else if (name === 'password' && value === data.repeat_password) {
      setError({...error, [name]: ''});
    }
  }

  const validateForm = () => {
    const newError = {};

    Object.keys(data).forEach(i => {
      if (data[i] === '') {
        newError[i] = 'Обязательно поле';
      } else if (i === 'password' && data[i].length < 8 || register && i === 'repeat_password' && data[i].length < 8) {
        newError[i] = 'Пароль должен состоять не менее чем из 8 символов'
      } else if (i === 'repeat_password' && data[i] !== data.password || register && i === 'password' && data[i] !== data.repeat_password) {
        newError[i] = 'Пароли не совпадают';
      }
    });

    setError(newError);

    return Object.keys(newError).length === 0;
  }

  const onChange = (e) => {
    const { name, value } = e.target;

    setData({...data, [name]: value});
    unValidate(name, value);
  }

  return {
    data,
    error,
    onChange,
    validateForm
  }
}