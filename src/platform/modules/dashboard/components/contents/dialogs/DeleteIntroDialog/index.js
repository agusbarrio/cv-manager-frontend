import { useCallback } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../../../../../core/components/contents/dialogs/ConfirmDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useDeleteIntroService from '../../../../services/intros/useDeleteIntroService';
import _ from 'lodash';
function DeleteIntroDialog({ open, onDelete, intro }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();
  const { deleteIntro } = useDeleteIntroService();

  const handleConfirm = useCallback(async () => {
    await deleteIntro(intro.id);
    if (_.isFunction(onDelete)) onDelete();
    closeDialog();
  }, [onDelete, deleteIntro, intro, closeDialog]);
  return (
    <ConfirmDialog
      open={open}
      onConfirm={handleConfirm}
      title={translate(DASHBOARD_TEXTS.DELETE_INTRO_DIALOG_TITLE)}
      textContent={translate(DASHBOARD_TEXTS.DELETE_INTRO_DIALOG_DESCRIPTION)}
    ></ConfirmDialog>
  );
}

export default DeleteIntroDialog;
