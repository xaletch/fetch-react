import '../index.css'
import { Button, Input } from "../../../../shared/ui"
import { useForm } from '../../models/hook';
import { useLoginMutation } from '../../models/hook/auth/useLogin'
import { Link, useNavigate } from 'react-router';

import { setLocalstorage } from '../../../../shared/lib/utils'
import { useAuth } from '../../../../shared/lib/hooks/isAuth';

export const LoginForm = () => {
  const navigate = useNavigate();

  const { data, error, onChange, validateForm } = useForm({
    email: '',
    password: '',
  });

  const { login, isLoading, isError, error: errorMessage } = useLoginMutation();

  const { setToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await login(data);
      console.log(res)
      if (res.jwt) {
        setLocalstorage('auth_token', res.jwt);
        setToken(res.jwt);
        
        navigate('/');
      }
    }
    catch (err) {
      console.log('Не удалось выполнить запроса ', err);
      throw err;
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input type={'email'} value={data.email} name={'email'} onChange={(e) => onChange(e)} placeholder={'Email'} error={error.email} isError={isError} />
      <Input type={'password'} value={data.password} name={"password"} onChange={(e) => onChange(e)} placeholder={'Пароль'} error={error.password} isError={isError} />
      <div className='form-text'>
        <span>Впервый на сайте</span>
        <Link to={'/register'}>Зарегистрироваться</Link>
      </div>
      {errorMessage && <p className='error'>{errorMessage}</p>}
      <Button type={'submit'}>{isLoading ? 'Загрузка' : 'Войти'}</Button>
    </form>
  )
}
