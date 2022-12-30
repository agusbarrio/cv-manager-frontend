import { useCallback } from 'react';
import useDecoredFetch from '../../core/hooks/useDecoredFetch';
import AUTH_ENDPOINTS from '../constants/endpoints';
function useRegisterService() {
  const { post } = useDecoredFetch();
  const register = useCallback(
    async (values) => {
      const result = await post(AUTH_ENDPOINTS.REGISTER, values);
      return result;
    },
    [post]
  );
  return { register };
}

export default useRegisterService;
