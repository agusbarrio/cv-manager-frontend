import { useCallback, useRef } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../../../../../core/components/contents/dialogs/ConfirmDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useEditIntroService from '../../../../services/intros/useEditIntroService';
import IntroForm from '../../forms/IntroForm/IntroForm';

function EditIntroDialog({ open, onEdit, intro }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();
  const { editIntro } = useEditIntroService();
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data) => {
      await editIntro(intro.id, data);
      closeDialog();
    },
    [closeDialog, editIntro, intro]
  );

  const handleConfirm = useCallback(async () => {
    if (formRef?.current) {
      const submit = formRef.current.handleSubmit(handleSubmit);
      await submit();
      await onEdit();
    }
  }, [handleSubmit, onEdit]);
  return (
    <ConfirmDialog
      open={open}
      onConfirm={handleConfirm}
      title={translate(DASHBOARD_TEXTS.EDIT_INTRO_DIALOG_TITLE)}
    >
      <IntroForm innerRef={formRef} defaultValues={intro}></IntroForm>
    </ConfirmDialog>
  );
}

export default EditIntroDialog;
