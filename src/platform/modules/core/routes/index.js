import PublicTemplate from '../../../../core/components/templates/PublicTemplate';
import Error404Page from '../pages/Error404Page';
import RaizPage from '../pages/RaizPage';
import corePaths from './paths';
import utils from './utils';

const coreRoutes = [
  {
    path: corePaths.raiz,
    exact: true,
    content: {
      render: RaizPage,
      Template: PublicTemplate,
    },
    ...utils.manageAccess({ needSession: false }),
  },
  {
    path: corePaths.error404,
    exact: true,
    content: {
      render: Error404Page,
      Template: PublicTemplate,
    },
  },
];

export default coreRoutes;
