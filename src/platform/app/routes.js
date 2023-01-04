import userRoutes from '../modules/user/routes';
import coreRoutes from '../modules/core/routes';
import authRoutes from '../modules/auth/routes';
import dashboardRoutes from '../modules/dashboard/routes';

const routes = [
  ...userRoutes,
  ...authRoutes,
  ...dashboardRoutes,
  ...coreRoutes,
];

export default routes;
