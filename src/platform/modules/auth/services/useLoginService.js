import { useCallback } from 'react';
import useDecoredFetch from '../../core/hooks/useDecoredFetch';
import AUTH_ENDPOINTS from '../constants/endpoints';
function useLoginService() {
  const { post } = useDecoredFetch();
  const login = useCallback(
    async (values) => {
      const result = await post(AUTH_ENDPOINTS.LOGIN, values, {
        withCredentials: true,
      });
      return result;
    },
    [post]
  );
  return { login };
}

export default useLoginService;
