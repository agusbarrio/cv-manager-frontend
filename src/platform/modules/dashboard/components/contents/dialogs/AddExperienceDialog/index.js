import { useCallback, useRef } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../../../../../core/components/contents/dialogs/ConfirmDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useAddExperienceService from '../../../../services/experiences/useAddExperienceService';
import ExperienceForm from '../../forms/ExperienceForm';
import useService from '../../../../../core/hooks/useService';
import _ from 'lodash';
function AddExperienceDialog({ open, onAdd }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();
  const { addExperience } = useAddExperienceService();
  const formRef = useRef(null);
  const { loading, runService } = useService({ service: addExperience });

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
      title={translate(DASHBOARD_TEXTS.ADD_EXPERIENCE_DIALOG_TITLE)}
    >
      <ExperienceForm innerRef={formRef}></ExperienceForm>
    </ConfirmDialog>
  );
}

export default AddExperienceDialog;
