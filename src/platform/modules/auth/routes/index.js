import authPaths from './paths';
import PublicTemplate from '../../../../core/components/templates/PublicTemplate';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import RecoverPasswordPage from '../pages/RecoverPasswordPage';
import utils from '../../core/routes/utils';

const authRoutes = [
  {
    path: authPaths.login,
    exact: true,
    content: {
      render: LoginPage,
      Template: PublicTemplate,
    },
    ...utils.manageAccess({ needSession: false }),
  },
  {
    path: authPaths.register,
    exact: true,
    content: {
      render: RegisterPage,
      Template: PublicTemplate,
    },
    ...utils.manageAccess({ needSession: false }),
  },
  {
    path: authPaths.recover,
    exact: true,
    content: {
      render: RecoverPasswordPage,
      Template: PublicTemplate,
    },
    ...utils.manageAccess({ needSession: false }),
  },
];
export default authRoutes;
