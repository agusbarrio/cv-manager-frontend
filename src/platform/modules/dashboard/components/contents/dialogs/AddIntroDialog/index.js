import { useCallback, useRef } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../../../../../core/components/contents/dialogs/ConfirmDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useAddIntroService from '../../../../services/intros/useAddIntroService';
import IntroForm from '../../forms/IntroForm/IntroForm';
import useService from '../../../../../core/hooks/useService';

import _ from 'lodash';
function AddIntroDialog({ open, onAdd }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();
  const { addIntro } = useAddIntroService();
  const { loading, runService } = useService({ service: addIntro });
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data) => {
      await runService(data);
      if (_.isFunction(onAdd)) onAdd();
      closeDialog();
    },
    [closeDialog, runService, onAdd]
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
      title={translate(DASHBOARD_TEXTS.ADD_INTRO_DIALOG_TITLE)}
    >
      <IntroForm innerRef={formRef}></IntroForm>
    </ConfirmDialog>
  );
}

export default AddIntroDialog;
