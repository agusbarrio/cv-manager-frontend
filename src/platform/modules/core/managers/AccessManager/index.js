import { useMemo } from 'react';
import Redirect from '../../components/navigation/Redirect';
import useSecurity from '../../hooks/useSecurity';

function AccessManager({ children, needSession }) {
  const { getAccess, getRedirectPathOnAccessDenied } = useSecurity();

  const hasAccess = useMemo(
    () => getAccess({ needSession }),
    [getAccess, needSession]
  );

  const redirectPath = useMemo(
    () => getRedirectPathOnAccessDenied({ needSession }),
    [getRedirectPathOnAccessDenied, needSession]
  );

  return (
    <>{!hasAccess ? <Redirect path={redirectPath}></Redirect> : children}</>
  );
}

export default AccessManager;
