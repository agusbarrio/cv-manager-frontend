import { useCallback } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../../../../../core/components/contents/dialogs/ConfirmDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useDeleteExperienceService from '../../../../services/experiences/useDeleteExperienceService';
import _ from 'lodash';
function DeleteExperienceDialog({ open, onDelete, experience }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();
  const { deleteExperience } = useDeleteExperienceService();

  const handleConfirm = useCallback(async () => {
    await deleteExperience(experience.id);
    if (_.isFunction(onDelete)) onDelete();
    closeDialog();
  }, [onDelete, deleteExperience, experience, closeDialog]);
  return (
    <ConfirmDialog
      open={open}
      onConfirm={handleConfirm}
      title={translate(DASHBOARD_TEXTS.DELETE_EXPERIENCE_DIALOG_TITLE)}
      textContent={translate(
        DASHBOARD_TEXTS.DELETE_EXPERIENCE_DIALOG_DESCRIPTION
      )}
    ></ConfirmDialog>
  );
}

export default DeleteExperienceDialog;
