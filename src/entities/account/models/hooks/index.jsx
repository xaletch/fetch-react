import { useState } from "react"
import { userService } from "../services";
import { getLocalstorage } from "../../../../shared/lib/utils";

export const useUserQuery = () => {
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const user = async () => {
    try {
      setIsLoading(true);

      const token = getLocalstorage('auth_token');

      const res = await userService(token);

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
  }

  return {
    data,
    isError,
    isLoading,
    error,
    user
  }
}