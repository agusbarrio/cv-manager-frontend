import { useCallback } from 'react';
import useSessionStore from '../../../app/contexts/SessionStoreContext/useSessionStore';
import authPaths from '../../auth/routes/paths';
import dashboardPaths from '../../dashboard/routes/paths';

function useSecurity() {
  const { session } = useSessionStore();

  const getAccess = useCallback(
    ({ needSession }) => {
      if (needSession && session?.logged) return true;
      if (!needSession && !session?.logged) return true;
      return false;
    },
    [session]
  );

  const getRedirectPathOnAccessDenied = useCallback(
    ({ needSession }) => {
      if (needSession && !session?.logged) return authPaths.login;
      if (!needSession && session?.logged) return dashboardPaths.intros;
      return authPaths.login;
    },
    [session]
  );

  return { getAccess, getRedirectPathOnAccessDenied };
}

export default useSecurity;
