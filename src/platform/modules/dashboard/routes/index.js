import dashboardPaths from './paths';
import DashboardPage from '../pages/DashboardPage';
import PublicTemplate from '../../../../core/components/templates/PublicTemplate';
import utils from '../../core/routes/utils';
const dashboardRoutes = [
  {
    path: dashboardPaths.dashboard,
    exact: true,
    content: {
      render: DashboardPage,
      Template: PublicTemplate,
    },
    ...utils.manageAccess({ needSession: true }),
  },
];

export default dashboardRoutes;
