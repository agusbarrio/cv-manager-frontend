import authPaths from './paths';
import PublicTemplate from '../../../../core/components/templates/PublicTemplate';
import RegisterPage from '../pages/RegisterPage';
const authRoutes = [
  {
    path: authPaths.login,
    exact: true,
    content: {
      render: () => {
        //TODO hacer pagina de login
        return <div>Login</div>;
      },
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
