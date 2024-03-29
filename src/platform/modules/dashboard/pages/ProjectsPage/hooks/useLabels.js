import { useMemo } from 'react';
import useLocale from '../../../../../../core/contexts/LocaleContext/useLocale';
import DASHBOARD_TEXTS from '../../../constants/texts';

function useLabels() {
  const { translate } = useLocale();
  const labels = useMemo(
    () => ({
      name: translate(DASHBOARD_TEXTS.PROJECT_NAME_LABEL),
      description: translate(DASHBOARD_TEXTS.PROJECT_DESCRIPTION_LABEL),
      startDate: translate(DASHBOARD_TEXTS.PROJECT_START_DATE_LABEL),
      endDate: translate(DASHBOARD_TEXTS.PROJECT_END_DATE_LABEL),
      url: translate(DASHBOARD_TEXTS.PROJECT_URL_LABEL),
      skills: translate(DASHBOARD_TEXTS.SKILLS_LABEL),
      education: translate(DASHBOARD_TEXTS.PROJECT_EDUCATION_LABEL),
      experience: translate(DASHBOARD_TEXTS.PROJECT_EXPERIENCE_LABEL),
      imgSrc: translate(DASHBOARD_TEXTS.PROJECT_IMG_SRC_LABEL),
    }),
    [translate]
  );

  return { labels };
}

export default useLabels;
