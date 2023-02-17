import { useCallback } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../ConfirmDialog';
import useService from '../../../../hooks/useService';
import CORE_TEXTS from '../../../../constants/texts';
import _ from 'lodash';

function DeleteAllEntitiesDialog({ open, onDelete, service }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();

  const { loading, runService } = useService({ service });

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
      textContent={translate(CORE_TEXTS.GENERIC_DELETE_ALL_DESCRIPTION_CONFIRM)}
    ></ConfirmDialog>
  );
}

export default DeleteAllEntitiesDialog;
