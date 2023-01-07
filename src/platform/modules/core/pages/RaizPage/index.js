import { useMemo } from 'react';
import useSessionStore from '../../../../app/contexts/SessionStoreContext/useSessionStore';
import authPaths from '../../../auth/routes/paths';
import dashboardPaths from '../../../dashboard/routes/paths';
import Redirect from '../../components/navigation/Redirect';

function RaizPage() {
  const { session } = useSessionStore();
  const redirectPath = useMemo(() => {
    return !!session?.logged ? dashboardPaths.dashboard : authPaths.login;
  }, [session]);
  return <Redirect path={redirectPath}></Redirect>;
}
export default RaizPage;
