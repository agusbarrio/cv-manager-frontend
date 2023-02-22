import { useMemo } from 'react';
import useLocale from '../../../../../../core/contexts/LocaleContext/useLocale';
import DASHBOARD_TEXTS from '../../../constants/texts';

function useLabels() {
  const { translate } = useLocale();
  const labels = useMemo(
    () => ({
      title: translate(DASHBOARD_TEXTS.APIKEY_TITLE_LABEL),
      resume: translate(DASHBOARD_TEXTS.APIKEY_RESUME_LABEL),
      id: translate(DASHBOARD_TEXTS.APIKEY_ID_LABEL),
    }),
    [translate]
  );

  return { labels };
}

export default useLabels;
