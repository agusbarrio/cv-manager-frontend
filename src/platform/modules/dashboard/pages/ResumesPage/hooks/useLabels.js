import { useMemo } from 'react';
import useLocale from '../../../../../../core/contexts/LocaleContext/useLocale';
import DASHBOARD_TEXTS from '../../../constants/texts';

function useLabels() {
  const { translate } = useLocale();
  const labels = useMemo(
    () => ({
      title: translate(DASHBOARD_TEXTS.RESUME_TITLE_LABEL),
      intro: translate(DASHBOARD_TEXTS.RESUME_INTRO_LABEL),
      contact: translate(DASHBOARD_TEXTS.RESUME_CONTACT_LABEL),
      experiences: translate(DASHBOARD_TEXTS.RESUME_EXPERIENCES_LABEL),
      skills: translate(DASHBOARD_TEXTS.RESUME_SKILLS_LABEL),
      educations: translate(DASHBOARD_TEXTS.RESUME_EDUCATIONS_LABEL),
      projects: translate(DASHBOARD_TEXTS.RESUME_PROJECTS_LABEL),
    }),
    [translate]
  );

  return { labels };
}

export default useLabels;
