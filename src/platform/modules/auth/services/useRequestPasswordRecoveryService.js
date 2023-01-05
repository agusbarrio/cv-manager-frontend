import { useCallback } from 'react';
import useDecoredFetch from '../../core/hooks/useDecoredFetch';
import useNavigate from '../../core/hooks/useNavigate';
import AUTH_ENDPOINTS from '../constants/endpoints';
import authPaths from '../routes/paths';
function useRequestPasswordRecoveryService() {
  const { post } = useDecoredFetch();
  const { go } = useNavigate();
  const requestPasswordRecovery = useCallback(
    async (values) => {
      const result = await post(
        AUTH_ENDPOINTS.REQUEST_PASSWORD_RECOVERY,
        values
      );
      if (!!result) go(authPaths.login);
    },
    [post, go]
  );
  return { requestPasswordRecovery };
}

export default useRequestPasswordRecoveryService;
