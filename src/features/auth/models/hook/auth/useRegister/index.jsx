import { useState } from 'react'
import { authService } from '../../../services';

export const useRegisterMutation = () => {
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { register: registration } = authService();

  const register = async (data) => {
    try {
      setIsLoading(true);

      const res = await registration(data);

      if (res.status === 'error') {
        setIsError(true);
        setError(res.message);
      }

      setData(res);

      return res;
    }

    catch (err) {
      setError(err)
    }
    finally {
      setIsLoading(false);
    }
  }

  return {
    data,
    isError,
    isLoading,
    error,
    register
  }
}
