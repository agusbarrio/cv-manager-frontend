import dashboardPaths from './paths';
import utils from '../../core/routes/utils';
import IntrosPage from '../pages/IntrosPage';
import DashboardTemplate from '../../core/components/templates/DashboardTemplate';
import ExperiencesPage from '../pages/ExperiencesPage';
import ProjectsPage from '../pages/ProjectsPage';
import SkillsPage from '../pages/SkillsPage';
import EducationsPage from '../pages/EducationsPage';
import ContactsPage from '../pages/ContactsPage';
const dashboardRoutes = [
  {
    path: dashboardPaths.intros,
    exact: true,
    content: {
      render: IntrosPage,
      Template: DashboardTemplate,
    },
    ...utils.manageAccess({ needSession: true }),
  },
  {
    path: dashboardPaths.experiences,
    exact: true,
    content: {
      render: ExperiencesPage,
      Template: DashboardTemplate,
    },
    ...utils.manageAccess({ needSession: true }),
  },
  {
    path: dashboardPaths.projects,
    exact: true,
    content: {
      render: ProjectsPage,
      Template: DashboardTemplate,
    },
    ...utils.manageAccess({ needSession: true }),
  },
  {
    path: dashboardPaths.skills,
    exact: true,
    content: {
      render: SkillsPage,
      Template: DashboardTemplate,
    },
    ...utils.manageAccess({ needSession: true }),
  },
  {
    path: dashboardPaths.educations,
    exact: true,
    content: {
      render: EducationsPage,
      Template: DashboardTemplate,
    },
    ...utils.manageAccess({ needSession: true }),
  },
  {
    path: dashboardPaths.contacts,
    exact: true,
    content: {
      render: ContactsPage,
      Template: DashboardTemplate,
    },
    ...utils.manageAccess({ needSession: true }),
  },
];

export default dashboardRoutes;
