import { useMemo } from 'react';
import useLocale from '../../../../../../core/contexts/LocaleContext/useLocale';
import DASHBOARD_TEXTS from '../../../constants/texts';

function useLabels() {
  const { translate } = useLocale();
  const labels = useMemo(
    () => ({
      title: translate(DASHBOARD_TEXTS.CONTACT_TITLE_LABEL),
      linkedin: translate(DASHBOARD_TEXTS.CONTACT_LINKEDIN_LABEL),
      facebook: translate(DASHBOARD_TEXTS.CONTACT_FACEBOOK_LABEL),
      twitter: translate(DASHBOARD_TEXTS.CONTACT_TWITTER_LABEL),
      email: translate(DASHBOARD_TEXTS.CONTACT_EMAIL_LABEL),
      phone: translate(DASHBOARD_TEXTS.CONTACT_PHONE_LABEL),
      mobilePhone: translate(DASHBOARD_TEXTS.CONTACT_MOBILE_PHONE_LABEL),
      address: translate(DASHBOARD_TEXTS.CONTACT_ADDRESS_LABEL),
      github: translate(DASHBOARD_TEXTS.CONTACT_GITHUB_LABEL),
      country: translate(DASHBOARD_TEXTS.CONTACT_COUNTRY_LABEL),
      postalCode: translate(DASHBOARD_TEXTS.CONTACT_POSTAL_CODE_LABEL),
      city: translate(DASHBOARD_TEXTS.CONTACT_CITY_LABEL),
      website: translate(DASHBOARD_TEXTS.CONTACT_WEBSITE_LABEL),
    }),
    [translate]
  );

  return { labels };
}

export default useLabels;
