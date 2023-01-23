import { useCallback } from 'react';
import useSessionStore from '../../../app/contexts/SessionStoreContext/useSessionStore';
import useDecoredFetch from '../../core/hooks/useDecoredFetch';
import AUTH_ENDPOINTS from '../constants/endpoints';

function useLogoutService() {
  const { post } = useDecoredFetch();
  const { logout: logoutStore } = useSessionStore();
  const logout = useCallback(async () => {
    await post(
      AUTH_ENDPOINTS.LOGOUT,
      null,
      { withCredentials: true },
      { showSuccessMessage: false }
    );
    logoutStore();
  }, [post, logoutStore]);
  return { logout };
}

export default useLogoutService;
