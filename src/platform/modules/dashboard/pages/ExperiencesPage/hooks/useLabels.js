import { useMemo } from 'react';
import useLocale from '../../../../../../core/contexts/LocaleContext/useLocale';
import DASHBOARD_TEXTS from '../../../constants/texts';

function useLabels() {
  const { translate } = useLocale();
  const labels = useMemo(
    () => ({
      title: translate(DASHBOARD_TEXTS.EXPERIENCE_TITLE_LABEL),
      companyName: translate(DASHBOARD_TEXTS.EXPERIENCE_COMPANY_NAME_LABEL),
      location: translate(DASHBOARD_TEXTS.EXPERIENCE_LOCATION_LABEL),
      startDate: translate(DASHBOARD_TEXTS.EXPERIENCE_START_DATE_LABEL),
      endDate: translate(DASHBOARD_TEXTS.EXPERIENCE_END_DATE_LABEL),
      industry: translate(DASHBOARD_TEXTS.EXPERIENCE_INDUSTRY_LABEL),
      description: translate(DASHBOARD_TEXTS.EXPERIENCE_DESCRIPTION_LABEL),
      employmentType: translate(
        DASHBOARD_TEXTS.EXPERIENCE_EMPLOYMENT_TYPE_LABEL
      ),
      getEmploymentTypeLabel: (employmentType) =>
        !!employmentType &&
        translate(
          DASHBOARD_TEXTS[`EXPERIENCE_EMPLOYMENT_TYPE_${employmentType}_LABEL`]
        ),
      skills: translate(DASHBOARD_TEXTS.SKILLS_LABEL),
    }),
    [translate]
  );

  return { labels };
}

export default useLabels;
