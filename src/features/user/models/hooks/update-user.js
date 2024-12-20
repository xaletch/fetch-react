import { useState } from 'react'
import { getLocalstorage } from '../../../../shared/lib/utils';
import { updateUserService } from '../services';

export const useUpdateUserMutation = () => {
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const { updateUser } = updateUserService();

  const update = async (data) => {
    try {
      setIsLoading(true);
      setIsSuccess(false);

      const token = getLocalstorage('auth_token');

      const res = await updateUser(data, token);

      if (res.status === 'error') {
        setIsError(true);
        setError(res.message);
      }

      setData(res);
      setIsSuccess(true);

      return res;
    }
    catch (err) {
      setError(err);
      setIsSuccess(false);
    }
    finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    isError,
    isLoading,
    isSuccess,
    error,
    update
  }
}
