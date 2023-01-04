import { useCallback } from 'react';
import useSessionStore from '../../../app/contexts/SessionStoreContext/useSessionStore';
import useDecoredFetch from '../../core/hooks/useDecoredFetch';
import useNavigate from '../../core/hooks/useNavigate';
import dashboardPaths from '../../dashboard/routes/paths';
import AUTH_ENDPOINTS from '../constants/endpoints';
function useLoginService() {
  const { post } = useDecoredFetch();
  const { login: loginStore, logout: logoutStore } = useSessionStore();
  const { go } = useNavigate();
  const login = useCallback(
    async (values) => {
      const result = await post(
        AUTH_ENDPOINTS.LOGIN,
        values,
        {
          withCredentials: true,
        },
        { logout401: false }
      );
      if (!!result) {
        loginStore();
        go(dashboardPaths.dashboard);
      } else {
        logoutStore();
      }
    },
    [post, loginStore, logoutStore, go]
  );
  return { login };
}

export default useLoginService;
