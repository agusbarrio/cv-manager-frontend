import { useCallback } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import EditableInfoCard from '../../../../../core/components/contents/cards/EditableInfoCard';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import DeleteExperienceDialog from '../../dialogs/DeleteExperienceDialog';
import EditExperienceDialog from '../../dialogs/EditExperienceDialog';
import MoreInfoExperienceDialog from '../../dialogs/MoreInfoExperienceDialog';

function ExperienceCard({ experience, onEdit, onDelete }) {
  const { translate } = useLocale();
  const { openDialog } = useDialog();

  const handleClickMoreInfo = useCallback(() => {
    openDialog(MoreInfoExperienceDialog, { experience });
  }, [openDialog, experience]);

  const handleClickEdit = useCallback(() => {
    openDialog(EditExperienceDialog, { experience, onEdit });
  }, [openDialog, experience, onEdit]);

  const handleClickDelete = useCallback(() => {
    openDialog(DeleteExperienceDialog, { experience, onDelete });
  }, [experience, onDelete, openDialog]);
  return (
    <EditableInfoCard
      title={experience.title}
      onClickEdit={handleClickEdit}
      onClickDelete={handleClickDelete}
      onClickMoreInfo={handleClickMoreInfo}
      items={[
        {
          label: translate(DASHBOARD_TEXTS.EXPERIENCE_COMPANY_NAME_LABEL),
          value: experience.companyName,
        },
        {
          label: translate(DASHBOARD_TEXTS.EXPERIENCE_LOCATION_LABEL),
          value: experience.location,
        },
        {
          label: translate(DASHBOARD_TEXTS.EXPERIENCE_START_DATE_LABEL),
          value: experience.startDate,
        },
        {
          label: translate(DASHBOARD_TEXTS.EXPERIENCE_END_DATE_LABEL),
          value: experience.endDate,
        },
        {
          label: translate(DASHBOARD_TEXTS.EXPERIENCE_INDUSTRY_LABEL),
          value: experience.industry,
        },
        {
          label: translate(DASHBOARD_TEXTS.EXPERIENCE_DESCRIPTION_LABEL),
          value: experience.description,
        },
        {
          label: translate(DASHBOARD_TEXTS.EXPERIENCE_EMPLOYMENT_TYPE_LABEL),
          value: experience.employmentType,
        },
      ]}
    />
  );
}

export default ExperienceCard;
