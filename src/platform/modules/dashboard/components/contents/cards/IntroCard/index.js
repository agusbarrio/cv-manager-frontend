import { useCallback } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import EditableInfoCard from '../../../../../core/components/contents/cards/EditableInfoCard';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import MoreInfoIntroDialog from '../../dialogs/MoreInfoIntroDialog';

function IntroCard({ intro }) {
  const { translate } = useLocale();
  const { openDialog } = useDialog();
  const handleClickMoreInfo = useCallback(() => {
    openDialog(MoreInfoIntroDialog, { intro });
  }, [openDialog, intro]);
  return (
    <EditableInfoCard
      title={intro.headLine}
      onClickEdit={() => {}}
      onClickDelete={() => {}}
      onClickMoreInfo={handleClickMoreInfo}
      items={[
        {
          label: translate(DASHBOARD_TEXTS.INTRO_FIRST_NAME_LABEL),
          value: intro.firstName,
        },
        {
          label: translate(DASHBOARD_TEXTS.INTRO_LAST_NAME_LABEL),
          value: intro.lastName,
        },
        {
          label: translate(DASHBOARD_TEXTS.INTRO_BIRTHDAY_LABEL),
          value: intro.birthday,
        },
        {
          label: translate(DASHBOARD_TEXTS.INTRO_ABOUT_LABEL),
          value: intro.about,
        },
      ]}
    />
  );
}

export default IntroCard;
