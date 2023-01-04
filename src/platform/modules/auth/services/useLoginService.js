import { useCallback } from 'react';
import useSessionStore from '../../../app/contexts/SessionStoreContext/useSessionStore';
import useDecoredFetch from '../../core/hooks/useDecoredFetch';

import AUTH_ENDPOINTS from '../constants/endpoints';
function useLoginService() {
  const { post } = useDecoredFetch();
  const { login: loginStore, logout: logoutStore } = useSessionStore();
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
      } else {
        logoutStore();
      }
    },
    [post, loginStore, logoutStore]
  );
  return { login };
}

export default useLoginService;
