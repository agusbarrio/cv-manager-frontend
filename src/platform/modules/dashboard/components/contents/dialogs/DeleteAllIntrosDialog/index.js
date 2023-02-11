import { useCallback } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../../../../../core/components/contents/dialogs/ConfirmDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useService from '../../../../../core/hooks/useService';
import useDeleteAllIntrosService from '../../../../services/intros/useDeleteAllIntrosService';
import CORE_TEXTS from '../../../../../core/constants/texts';
import _ from 'lodash';

function DeleteAllIntrosDialog({ open, onDelete }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();
  const { deleteAllIntros } = useDeleteAllIntrosService();
  const { loading, runService } = useService({ service: deleteAllIntros });
  const handleConfirm = useCallback(async () => {
    await runService();
    if (_.isFunction(onDelete)) onDelete();
    closeDialog();
  }, [onDelete, runService, closeDialog]);
  return (
    <ConfirmDialog
      open={open}
      onConfirm={handleConfirm}
      confirmButtonProps={{ disabled: loading }}
      title={translate(CORE_TEXTS.GENERIC_DELETE_ALL)}
      textContent={translate(
        DASHBOARD_TEXTS.DELETE_ALL_INTROS_DIALOG_DESCRIPTION
      )}
    ></ConfirmDialog>
  );
}

export default DeleteAllIntrosDialog;
