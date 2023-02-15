import { useCallback, useRef } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import ConfirmDialog from '../../../../../core/components/contents/dialogs/ConfirmDialog';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useEditProjectService from '../../../../services/projects/useEditProjectService';
import ProjectForm from '../../forms/ProjectForm';
import _ from 'lodash';
import useService from '../../../../../core/hooks/useService';

function EditProjectDialog({ open, onEdit, project }) {
  const { translate } = useLocale();
  const { closeDialog } = useDialog();
  const { editProject } = useEditProjectService();
  const { loading, runService } = useService({ service: editProject });
  const formRef = useRef(null);

  const handleSubmit = useCallback(
    async (data) => {
      await runService(project.id, data);
      if (_.isFunction(onEdit)) onEdit();
      closeDialog();
    },
    [closeDialog, runService, project, onEdit]
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
      title={translate(DASHBOARD_TEXTS.EDIT_PROJECT_DIALOG_TITLE)}
    >
      <ProjectForm innerRef={formRef} defaultValues={project}></ProjectForm>
    </ConfirmDialog>
  );
}

export default EditProjectDialog;
