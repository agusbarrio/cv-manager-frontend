import { useCallback } from 'react';
import useSessionStore from '../../../app/contexts/SessionStoreContext/useSessionStore';
import useDecoredFetch from '../../core/hooks/useDecoredFetch';
import useNavigate from '../../core/hooks/useNavigate';
import AUTH_ENDPOINTS from '../constants/endpoints';
import authPaths from '../routes/paths';

function useLogoutService() {
  const { post } = useDecoredFetch();
  const { logout: logoutStore } = useSessionStore();
  const { go } = useNavigate();
  const logout = useCallback(async () => {
    await post(AUTH_ENDPOINTS.LOGOUT, null, { withCredentials: true });

    logoutStore();
    go(authPaths.logout);
  }, [post, logoutStore, go]);
  return { logout };
}

export default useLogoutService;
