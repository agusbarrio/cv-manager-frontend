import useLocale from '../../../../../core/contexts/LocaleContext/useLocale';
import DASHBOARD_TEXTS from '../../constants/texts';
import Tabs from '../../../../../core/components/navigation/Tabs';
import React, { useMemo } from 'react';
import IntrosPage from '../IntrosPage';
import ExperiencesPage from '../ExperiencesPage';
import EducationsPage from '../EducationsPage';
import ProjectsPage from '../ProjectsPage';
import SkillsPage from '../SkillsPage';
import ContactsPage from '../ContactsPage';
import { tabsClasses } from '@mui/material';

function DashboardPage() {
  const { translate } = useLocale();
  const tabs = useMemo(
    () => [
      {
        render: IntrosPage,
        props: {
          label: translate(DASHBOARD_TEXTS.INTROS_PAGE_TITLE),
        },
      },
      {
        render: ExperiencesPage,
        props: { label: translate(DASHBOARD_TEXTS.EXPERIENCES_PAGE_TITLE) },
      },
      {
        render: EducationsPage,
        props: { label: translate(DASHBOARD_TEXTS.EDUCATIONS_PAGE_TITLE) },
      },
      {
        render: ProjectsPage,
        props: { label: translate(DASHBOARD_TEXTS.PROJECTS_PAGE_TITLE) },
      },
      {
        render: SkillsPage,
        props: { label: translate(DASHBOARD_TEXTS.SKILLS_PAGE_TITLE) },
      },
      {
        render: ContactsPage,
        props: { label: translate(DASHBOARD_TEXTS.CONTACTS_PAGE_TITLE) },
      },
    ],
    [translate]
  );

  return (
    <Tabs
      tabs={tabs}
      tabsProps={{
        variant: 'scrollable',
        allowScrollButtonsMobile: true,
        scrollButtons: true,
        sx: {
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
          [`& .${tabsClasses.scroller}`]: {
            flexGrow: 1,
          },
          [`& .${tabsClasses.flexContainer}`]: {
            justifyContent: 'space-between',
          },
        },
      }}
    ></Tabs>
  );
}

export default DashboardPage;
