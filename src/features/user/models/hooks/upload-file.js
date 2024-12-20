import { useState } from 'react'
import { getLocalstorage } from '../../../../shared/lib/utils';
import { updateUserService } from '../services';

export const useUploadFileMutation = () => {
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { uploadFile } = updateUserService();

  const update = async (file) => {
    try {
      setIsLoading(true);

      const token = getLocalstorage('auth_token');

      const res = await uploadFile(file, token);

      const { data: resData } = res;

      if (res.status === 'error') {
        setIsError(true);
        setError(res.message);
      }

      setData(resData);

      return res;
    }
    catch (err) {
      setError(err)
    }
    finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    isError,
    isLoading,
    error,
    update
  }
}
