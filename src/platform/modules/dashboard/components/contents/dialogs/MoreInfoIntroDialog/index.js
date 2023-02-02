import { Stack } from '@mui/material';
import FullTextInfo from '../../../../../../../core/components/dataDisplay/FullTextInfo';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import AlertDialog from '../../../../../core/components/contents/dialogs/AlertDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';

function MoreInfoIntroDialog({ open, intro }) {
  const { translate } = useLocale();

  return (
    <AlertDialog
      open={open}
      title={translate(DASHBOARD_TEXTS.MORE_INFO_INTRO_DIALOG_TITLE)}
    >
      <Stack spacing={1}>
        <FullTextInfo title={translate(DASHBOARD_TEXTS.INTRO_HEAD_LINE_LABEL)}>
          {intro.headLine}
        </FullTextInfo>
        <FullTextInfo title={translate(DASHBOARD_TEXTS.INTRO_FIRST_NAME_LABEL)}>
          {intro.firstName}
        </FullTextInfo>
        <FullTextInfo title={translate(DASHBOARD_TEXTS.INTRO_LAST_NAME_LABEL)}>
          {intro.lastName}
        </FullTextInfo>
        <FullTextInfo title={translate(DASHBOARD_TEXTS.INTRO_BIRTHDAY_LABEL)}>
          {intro.birthday}
        </FullTextInfo>
        <FullTextInfo title={translate(DASHBOARD_TEXTS.INTRO_ABOUT_LABEL)}>
          {intro.about}
        </FullTextInfo>
      </Stack>
    </AlertDialog>
  );
}

export default MoreInfoIntroDialog;
