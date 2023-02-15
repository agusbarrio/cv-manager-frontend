import { useCallback, useRef } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../../../../../core/components/contents/dialogs/ConfirmDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useAddProjectService from '../../../../services/projects/useAddProjectService';
import ProjectForm from '../../forms/ProjectForm';
import useService from '../../../../../core/hooks/useService';
import _ from 'lodash';
function AddProjectDialog({ open, onAdd }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();
  const { addProject } = useAddProjectService();
  const formRef = useRef(null);
  const { loading, runService } = useService({ service: addProject });

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
      title={translate(DASHBOARD_TEXTS.ADD_PROJECT_DIALOG_TITLE)}
    >
      <ProjectForm innerRef={formRef}></ProjectForm>
    </ConfirmDialog>
  );
}

export default AddProjectDialog;
