import { useCallback } from 'react';
import useDecoredFetch from '../../core/hooks/useDecoredFetch';
import useNavigate from '../../core/hooks/useNavigate';
import AUTH_ENDPOINTS from '../constants/endpoints';
import authPaths from '../routes/paths';
function useResetPasswordService() {
  const { post } = useDecoredFetch();
  const { go } = useNavigate();
  const resetPassword = useCallback(
    async (values) => {
      const result = await post(AUTH_ENDPOINTS.RESET_PASSWORD, values);
      if (!!result) go(authPaths.login);
    },
    [post, go]
  );
  return { resetPassword };
}

export default useResetPasswordService;
