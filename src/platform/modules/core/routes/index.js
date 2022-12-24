import PublicTemplate from '../../../../core/components/templates/PublicTemplate';
import Error404Page from '../pages/Error404Page';
import corePaths from './paths';

const coreRoutes = [
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
