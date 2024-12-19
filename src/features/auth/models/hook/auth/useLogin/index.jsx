import { useState } from 'react'
import { authService } from '../../../services';

export const useLoginMutation = () => {
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { login: auth } = authService();

  const login = async (data) => {
    try {
      setIsLoading(true);

      const res = await auth(data);

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
    login
  }
}
