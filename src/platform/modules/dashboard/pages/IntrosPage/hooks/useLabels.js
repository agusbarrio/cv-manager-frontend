import { useMemo } from 'react';
import useLocale from '../../../../../../core/contexts/LocaleContext/useLocale';
import DASHBOARD_TEXTS from '../../../constants/texts';

function useLabels() {
  const { translate } = useLocale();
  const labels = useMemo(
    () => ({
      firstName: translate(DASHBOARD_TEXTS.INTRO_FIRST_NAME_LABEL),
      lastName: translate(DASHBOARD_TEXTS.INTRO_LAST_NAME_LABEL),
      headLine: translate(DASHBOARD_TEXTS.INTRO_HEAD_LINE_LABEL),
      birthday: translate(DASHBOARD_TEXTS.INTRO_BIRTHDAY_LABEL),
      about: translate(DASHBOARD_TEXTS.INTRO_ABOUT_LABEL),
      imgSrc: translate(DASHBOARD_TEXTS.INTRO_IMG_SRC_LABEL),
    }),
    [translate]
  );

  return { labels };
}

export default useLabels;
