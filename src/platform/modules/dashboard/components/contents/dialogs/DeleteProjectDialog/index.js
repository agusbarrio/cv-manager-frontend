import { useCallback } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../../../../../core/components/contents/dialogs/ConfirmDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useDeleteProjectService from '../../../../services/projects/useDeleteProjectService';
import _ from 'lodash';
import useService from '../../../../../core/hooks/useService';

function DeleteProjectDialog({ open, onDelete, project }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();
  const { deleteProject } = useDeleteProjectService();
  const { loading, runService } = useService({ service: deleteProject });
  const handleConfirm = useCallback(async () => {
    await runService(project.id);
    if (_.isFunction(onDelete)) onDelete();
    closeDialog();
  }, [onDelete, runService, project, closeDialog]);
  return (
    <ConfirmDialog
      open={open}
      onConfirm={handleConfirm}
      confirmButtonProps={{ disabled: loading }}
      title={translate(DASHBOARD_TEXTS.DELETE_PROJECT_DIALOG_TITLE)}
      textContent={translate(DASHBOARD_TEXTS.DELETE_PROJECT_DIALOG_DESCRIPTION)}
    ></ConfirmDialog>
  );
}

export default DeleteProjectDialog;
