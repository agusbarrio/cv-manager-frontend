import { useMemo } from 'react';
import Redirect from '../../components/Redirect';
import authPaths from '../../../auth/routes/paths';
function AccessManager({ children }) {
  //TODO Definir e implementar los criterios de acceso a las páginas
  const hasAccess = useMemo(() => true, []);
  return (
    <>{!hasAccess ? <Redirect path={authPaths.login}></Redirect> : children}</>
  );
}

export default AccessManager;
