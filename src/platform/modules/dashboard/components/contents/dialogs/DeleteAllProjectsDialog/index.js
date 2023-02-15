import { useCallback } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../../../../../core/components/contents/dialogs/ConfirmDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useService from '../../../../../core/hooks/useService';
import _ from 'lodash';
import useDeleteAllProjectsService from '../../../../services/projects/useDeleteAllProjectsService';
import CORE_TEXTS from '../../../../../core/constants/texts';
function DeleteAllProjectsDialog({ open, onDelete }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();
  const { deleteAllProjects } = useDeleteAllProjectsService();
  const { loading, runService } = useService({ service: deleteAllProjects });
  const handleConfirm = useCallback(async () => {
    await runService();
    if (_.isFunction(onDelete)) onDelete();
    closeDialog();
  }, [onDelete, runService, closeDialog]);
  return (
    <ConfirmDialog
      open={open}
      onConfirm={handleConfirm}
      title={translate(CORE_TEXTS.GENERIC_DELETE_ALL)}
      confirmButtonProps={{ disabled: loading }}
      textContent={translate(
        DASHBOARD_TEXTS.DELETE_ALL_PROJECTS_DIALOG_DESCRIPTION
      )}
    ></ConfirmDialog>
  );
}

export default DeleteAllProjectsDialog;
