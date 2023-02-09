import { Stack } from '@mui/material';
import FullTextInfo from '../../../../../../../core/components/dataDisplay/FullTextInfo';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import AlertDialog from '../../../../../core/components/contents/dialogs/AlertDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';

function MoreInfoExperienceDialog({ open, experience }) {
  const { translate } = useLocale();

  return (
    <AlertDialog
      open={open}
      title={translate(DASHBOARD_TEXTS.MORE_INFO_EXPERIENCE_DIALOG_TITLE)}
    >
      <Stack spacing={1}>
        <FullTextInfo title={translate(DASHBOARD_TEXTS.EXPERIENCE_TITLE_LABEL)}>
          {experience.title}
        </FullTextInfo>
        <FullTextInfo
          title={translate(DASHBOARD_TEXTS.EXPERIENCE_COMPANY_NAME_LABEL)}
        >
          {experience.companyName}
        </FullTextInfo>
        <FullTextInfo
          title={translate(DASHBOARD_TEXTS.EXPERIENCE_LOCATION_LABEL)}
        >
          {experience.location}
        </FullTextInfo>
        <FullTextInfo
          title={translate(DASHBOARD_TEXTS.EXPERIENCE_START_DATE_LABEL)}
        >
          {experience.startDate}
        </FullTextInfo>
        <FullTextInfo
          title={translate(DASHBOARD_TEXTS.EXPERIENCE_END_DATE_LABEL)}
        >
          {experience.endDate}
        </FullTextInfo>
        <FullTextInfo
          title={translate(DASHBOARD_TEXTS.EXPERIENCE_INDUSTRY_LABEL)}
        >
          {experience.industry}
        </FullTextInfo>
        <FullTextInfo
          title={translate(DASHBOARD_TEXTS.EXPERIENCE_DESCRIPTION_LABEL)}
        >
          {experience.description}
        </FullTextInfo>
        <FullTextInfo
          title={translate(DASHBOARD_TEXTS.EXPERIENCE_EMPLOYMENT_TYPE_LABEL)}
        >
          {experience.employmentType}
        </FullTextInfo>
      </Stack>
    </AlertDialog>
  );
}

export default MoreInfoExperienceDialog;
