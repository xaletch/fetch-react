import '../index.css'
import { Button, Input } from "../../../../shared/ui"
import { useForm } from '../../models/hook'
import { useRegisterMutation } from '../../models/hook/auth/useRegister';
import { Link, useNavigate } from 'react-router';
import { setLocalstorage } from '../../../../shared/lib/utils'
import { useAuth } from '../../../../shared/lib/hooks/isAuth';


export const RegisterForm = () => {
  const navigate = useNavigate();
  const { data, error, onChange, validateForm } = useForm({
    email: '',
    password: '',
    repeat_password: '',
  }, true);

  const { register, isLoading, isError, error: errorMessage } = useRegisterMutation();

  const { setToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    
    try {
      const res = await register(data);

      if (res.jwt) {
        setLocalstorage('auth_token', res.jwt);
        setToken(res.jwt);

        navigate({ to: '/' });
      }
    }
    catch(err) {
      console.log('Не удалось выполнить запрос. ', err);
      throw err;
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input type={'email'} value={data.email} name={'email'} onChange={(e) => onChange(e)} placeholder={'Email'} error={error.email} isError={isError} />
      <Input type={'password'} value={data.password} name={"password"} onChange={(e) => onChange(e)} placeholder={'Пароль'} error={error.password} isError={isError} />
      <Input type={'password'} value={data.repeat_password} name={"repeat_password"} onChange={(e) => onChange(e)} placeholder={'Повторите пароль'} error={error.repeat_password} isError={isError} />
      
      <div className='form-text'>
        <span>Уже зарегистрировались?</span>
        <Link to={'/login'}>Войти</Link>
      </div>
      
      {errorMessage && <p className='error'>{errorMessage}</p>}
      <Button type={'submit'}>{isLoading ? 'Регистрируем' : 'Зарегистрироваться'}</Button>
    </form>
  )
}
