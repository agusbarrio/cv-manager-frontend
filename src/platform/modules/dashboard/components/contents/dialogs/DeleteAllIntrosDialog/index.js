import { useCallback } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../../../../../core/components/contents/dialogs/ConfirmDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';

import _ from 'lodash';
import useDeleteAllIntrosService from '../../../../services/intros/useDeleteAllIntrosService';
import CORE_TEXTS from '../../../../../core/constants/texts';
function DeleteAllIntrosDialog({ open, onDelete }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();
  const { deleteAllIntros } = useDeleteAllIntrosService();

  const handleConfirm = useCallback(async () => {
    await deleteAllIntros();
    closeDialog();
    if (_.isFunction(onDelete)) await onDelete();
  }, [onDelete, deleteAllIntros, closeDialog]);
  return (
    <ConfirmDialog
      open={open}
      onConfirm={handleConfirm}
      title={translate(CORE_TEXTS.GENERIC_DELETE_ALL)}
      textContent={translate(
        DASHBOARD_TEXTS.DELETE_ALL_INTROS_DIALOG_DESCRIPTION
      )}
    ></ConfirmDialog>
  );
}

export default DeleteAllIntrosDialog;
