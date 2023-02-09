import { useCallback, useRef } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../../../../../core/components/contents/dialogs/ConfirmDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useEditExperienceService from '../../../../services/experiences/useEditExperienceService';
import ExperienceForm from '../../forms/ExperienceForm';
import _ from 'lodash';
function EditExperienceDialog({ open, onEdit, experience }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();
  const { editExperience } = useEditExperienceService();
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data) => {
      await editExperience(experience.id, data);
      if (_.isFunction(onEdit)) onEdit();
      closeDialog();
    },
    [closeDialog, editExperience, experience, onEdit]
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
      title={translate(DASHBOARD_TEXTS.EDIT_EXPERIENCE_DIALOG_TITLE)}
    >
      <ExperienceForm
        innerRef={formRef}
        defaultValues={experience}
      ></ExperienceForm>
    </ConfirmDialog>
  );
}

export default EditExperienceDialog;
