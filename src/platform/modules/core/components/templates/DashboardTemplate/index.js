import { Box } from '@mui/material';
import { useMemo } from 'react';
import NavTabs from '../../../../../../core/components/navigation/NavTabs';
import useLocale from '../../../../../../core/contexts/LocaleContext/useLocale';
import DASHBOARD_TEXTS from '../../../../dashboard/constants/texts';
import dashboardPaths from '../../../../dashboard/routes/paths';
import useNavigate from '../../../hooks/useNavigate';
import PlatformTemplate from '../PlatformTemplate';

function DashboardTemplate({ children }) {
  const { translate } = useLocale();
  const { go } = useNavigate();
  const tabs = useMemo(
    () => [
      {
        props: { label: translate(DASHBOARD_TEXTS.RESUMES_PAGE_TITLE) },
        path: dashboardPaths.resumes,
      },
      {
        props: { label: translate(DASHBOARD_TEXTS.INTROS_PAGE_TITLE) },
        path: dashboardPaths.intros,
      },
      {
        props: { label: translate(DASHBOARD_TEXTS.EXPERIENCES_PAGE_TITLE) },
        path: dashboardPaths.experiences,
      },
      {
        props: { label: translate(DASHBOARD_TEXTS.PROJECTS_PAGE_TITLE) },
        path: dashboardPaths.projects,
      },
      {
        props: { label: translate(DASHBOARD_TEXTS.SKILLS_PAGE_TITLE) },
        path: dashboardPaths.skills,
      },
      {
        props: { label: translate(DASHBOARD_TEXTS.EDUCATIONS_PAGE_TITLE) },
        path: dashboardPaths.educations,
      },
      {
        props: { label: translate(DASHBOARD_TEXTS.CONTACTS_PAGE_TITLE) },
        path: dashboardPaths.contacts,
      },
    ],
    [translate]
  );

  return (
    <PlatformTemplate>
      <Box sx={{ width: '100%', height: '100%' }}>
        <NavTabs
          tabs={tabs}
          navigate={go}
          variant="scrollable"
          allowScrollButtonsMobile
          scrollButtons
          sx={{ paddingRight: '1rem', paddingLeft: '1rem', height: '3rem' }}
        />
        <Box sx={{ height: 'calc(100% - 3rem)' }}>{children}</Box>
      </Box>
    </PlatformTemplate>
  );
}

export default DashboardTemplate;
