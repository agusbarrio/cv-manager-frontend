import { useCallback, useRef } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../../../../../core/components/contents/dialogs/ConfirmDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useEditIntroService from '../../../../services/intros/useEditIntroService';
import IntroForm from '../../forms/IntroForm/IntroForm';
import useService from '../../../../../core/hooks/useService';

import _ from 'lodash';
function EditIntroDialog({ open, onEdit, intro }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();
  const { editIntro } = useEditIntroService();
  const { loading, runService } = useService({ service: editIntro });
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data) => {
      await runService(intro.id, data);
      if (_.isFunction(onEdit)) onEdit();
      closeDialog();
    },
    [closeDialog, runService, intro, onEdit]
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
      title={translate(DASHBOARD_TEXTS.EDIT_INTRO_DIALOG_TITLE)}
    >
      <IntroForm innerRef={formRef} defaultValues={intro}></IntroForm>
    </ConfirmDialog>
  );
}

export default EditIntroDialog;
