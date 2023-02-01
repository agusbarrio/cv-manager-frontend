import { useCallback, useRef } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../../../../../core/components/contents/dialogs/ConfirmDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useCreateIntroService from '../../../../services/intros/useCreateIntroService';
import IntroForm from '../../forms/IntroForm/IntroForm';
function AddIntroDialog({ open, onAdd }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();
  const { createIntro } = useCreateIntroService();
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data) => {
      await createIntro(data);
      closeDialog();
    },
    [closeDialog, createIntro]
  );

  const handleConfirm = useCallback(async () => {
    if (formRef?.current) {
      const submit = formRef.current.handleSubmit(handleSubmit);
      await submit();
      await onAdd();
    }
  }, [handleSubmit, onAdd]);
  return (
    <ConfirmDialog
      open={open}
      onConfirm={handleConfirm}
      title={translate(DASHBOARD_TEXTS.ADD_INTRO_DIALOG_TITLE)}
    >
      <IntroForm innerRef={formRef}></IntroForm>
    </ConfirmDialog>
  );
}

export default AddIntroDialog;
