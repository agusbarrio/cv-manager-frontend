import userRoutes from '../modules/user/routes';
import coreRoutes from '../modules/core/routes';
import authRoutes from '../modules/auth/routes';

const routes = [...userRoutes, ...authRoutes, ...coreRoutes];

export default routes;
