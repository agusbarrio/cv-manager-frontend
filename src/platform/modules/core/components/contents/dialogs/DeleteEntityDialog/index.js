import { useCallback } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../ConfirmDialog';
import _ from 'lodash';
import useService from '../../../../hooks/useService';
import CORE_TEXTS from '../../../../constants/texts';

function DeleteEntityDialog({ open, onDelete, entity, service }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();

  const { loading, runService } = useService({ service });

  const handleConfirm = useCallback(async () => {
    await runService(entity.id);
    if (_.isFunction(onDelete)) onDelete();
    closeDialog();
  }, [onDelete, runService, entity, closeDialog]);
  return (
    <ConfirmDialog
      open={open}
      onConfirm={handleConfirm}
      confirmButtonProps={{ disabled: loading }}
      title={translate(CORE_TEXTS.GENERIC_DELETE)}
      textContent={translate(CORE_TEXTS.GENERIC_DELETE_DESCRIPTION_CONFIRM)}
    ></ConfirmDialog>
  );
}

export default DeleteEntityDialog;
