import { useCallback } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../../../../../core/components/contents/dialogs/ConfirmDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';

import _ from 'lodash';
import useDeleteAllExperiencesService from '../../../../services/experiences/useDeleteAllExperiencesService';
import CORE_TEXTS from '../../../../../core/constants/texts';
function DeleteAllExperiencesDialog({ open, onDelete }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();
  const { deleteAllExperiences } = useDeleteAllExperiencesService();

  const handleConfirm = useCallback(async () => {
    await deleteAllExperiences();
    if (_.isFunction(onDelete)) onDelete();
    closeDialog();
  }, [onDelete, deleteAllExperiences, closeDialog]);
  return (
    <ConfirmDialog
      open={open}
      onConfirm={handleConfirm}
      title={translate(CORE_TEXTS.GENERIC_DELETE_ALL)}
      textContent={translate(
        DASHBOARD_TEXTS.DELETE_ALL_EXPERIENCES_DIALOG_DESCRIPTION
      )}
    ></ConfirmDialog>
  );
}

export default DeleteAllExperiencesDialog;
