import authPaths from '../../../auth/routes/paths';
import Redirect from '../../components/Redirect';

function RaizPage() {
  return <Redirect path={authPaths.login}></Redirect>;
}
export default RaizPage;
