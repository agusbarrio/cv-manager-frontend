import authPaths from './paths';
import PublicTemplate from '../../../../core/components/templates/PublicTemplate';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
const authRoutes = [
  {
    path: authPaths.login,
    exact: true,
    content: {
      render: LoginPage,
      Template: PublicTemplate,
    },
  },
  {
    path: authPaths.register,
    exact: true,
    content: {
      render: RegisterPage,
      Template: PublicTemplate,
    },
  },
];
export default authRoutes;
