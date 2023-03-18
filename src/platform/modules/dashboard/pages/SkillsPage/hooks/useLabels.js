import { useMemo } from 'react';
import useLocale from '../../../../../../core/contexts/LocaleContext/useLocale';
import DASHBOARD_TEXTS from '../../../constants/texts';

function useLabels() {
  const { translate } = useLocale();
  const labels = useMemo(
    () => ({
      name: translate(DASHBOARD_TEXTS.SKILL_NAME_LABEL),
      imgSrc: translate(DASHBOARD_TEXTS.SKILL_IMG_SRC_LABEL),
    }),
    [translate]
  );

  return { labels };
}

export default useLabels;
