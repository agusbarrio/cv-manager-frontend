import { Stack } from '@mui/material';
import FullTextInfo from '../../../../../../../core/components/dataDisplay/FullTextInfo';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import AlertDialog from '../../../../../core/components/contents/dialogs/AlertDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';

function MoreInfoProjectDialog({ open, project }) {
  const { translate } = useLocale();

  return (
    <AlertDialog
      open={open}
      title={translate(DASHBOARD_TEXTS.MORE_INFO_PROJECT_DIALOG_TITLE)}
    >
      <Stack spacing={1}>
        <FullTextInfo title={translate(DASHBOARD_TEXTS.PROJECT_NAME_LABEL)}>
          {project.name}
        </FullTextInfo>
        <FullTextInfo
          title={translate(DASHBOARD_TEXTS.PROJECT_DESCRIPTION_LABEL)}
        >
          {project.description}
        </FullTextInfo>
        <FullTextInfo
          title={translate(DASHBOARD_TEXTS.PROJECT_START_DATE_LABEL)}
        >
          {project.startDate}
        </FullTextInfo>
        <FullTextInfo title={translate(DASHBOARD_TEXTS.PROJECT_END_DATE_LABEL)}>
          {project.endDate}
        </FullTextInfo>
        <FullTextInfo title={translate(DASHBOARD_TEXTS.PROJECT_URL_LABEL)}>
          {project.url}
        </FullTextInfo>
      </Stack>
    </AlertDialog>
  );
}

export default MoreInfoProjectDialog;
