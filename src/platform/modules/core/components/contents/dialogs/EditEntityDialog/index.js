import { useCallback, useRef } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../ConfirmDialog';
import CORE_TEXTS from '../../../../constants/texts';
import useService from '../../../../hooks/useService';
import _ from 'lodash';
function EditEntityDialog({ open, onEdit, service, form: Form, entity }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();
  const formRef = useRef(null);
  const { loading, runService } = useService({ service });

  const handleSubmit = useCallback(
    async (data) => {
      await runService(entity.id, data);
      if (_.isFunction(onEdit)) onEdit();
      closeDialog();
    },
    [closeDialog, runService, onEdit, entity.id]
  );

  const handleConfirm = useCallback(async () => {
    if (formRef?.current) {
      const submit = formRef.current.handleSubmit(handleSubmit);
      await submit();
    }
  }, [handleSubmit]);

  return (
    <ConfirmDialog
      open={open}
      onConfirm={handleConfirm}
      confirmButtonProps={{ disabled: loading }}
      title={translate(CORE_TEXTS.GENERIC_ADD)}
    >
      <Form innerRef={formRef} defaultValues={entity}></Form>
    </ConfirmDialog>
  );
}

export default EditEntityDialog;
