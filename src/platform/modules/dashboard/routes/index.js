import dashboardPaths from './paths';
import DashboardPage from '../pages/DashboardPage';
import utils from '../../core/routes/utils';
import PlatformTemplate from '../../core/components/templates/PlatformTemplate';
const dashboardRoutes = [
  {
    path: dashboardPaths.dashboard,
    exact: true,
    content: {
      render: DashboardPage,
      Template: PlatformTemplate,
    },
    ...utils.manageAccess({ needSession: true }),
  },
];

export default dashboardRoutes;
