import { useMemo } from 'react';
import useLocale from '../../../../../../core/contexts/LocaleContext/useLocale';
import DASHBOARD_TEXTS from '../../../constants/texts';

function useLabels() {
  const { translate } = useLocale();
  const labels = useMemo(
    () => ({
      school: translate(DASHBOARD_TEXTS.EDUCATION_SCHOOL_LABEL),
      degree: translate(DASHBOARD_TEXTS.EDUCATION_DEGREE_LABEL),
      fieldOfStudy: translate(DASHBOARD_TEXTS.EDUCATION_FIELD_OF_STUDY_LABEL),
      startDate: translate(DASHBOARD_TEXTS.EDUCATION_START_DATE_LABEL),
      endDate: translate(DASHBOARD_TEXTS.EDUCATION_END_DATE_LABEL),
      grade: translate(DASHBOARD_TEXTS.EDUCATION_GRADE_LABEL),
      activities: translate(DASHBOARD_TEXTS.EDUCATION_ACTIVITIES_LABEL),
      description: translate(DASHBOARD_TEXTS.EDUCATION_DESCRIPTION_LABEL),
      skills: translate(DASHBOARD_TEXTS.SKILLS_LABEL),
    }),
    [translate]
  );

  return { labels };
}

export default useLabels;
