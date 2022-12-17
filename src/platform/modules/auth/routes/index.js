import authPaths from './paths';
import PublicTemplate from '../../../../core/components/templates/PublicTemplate';
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
];
export default authRoutes;
