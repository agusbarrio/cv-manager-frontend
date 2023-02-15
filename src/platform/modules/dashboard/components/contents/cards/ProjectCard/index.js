import { useCallback } from 'react';
import useDialog from '../../../../../../../core/contexts/DialogContext/useDialog';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import EditableInfoCard from '../../../../../core/components/contents/cards/EditableInfoCard';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import DeleteProjectDialog from '../../dialogs/DeleteProjectDialog';
import EditProjectDialog from '../../dialogs/EditProjectDialog';
import MoreInfoProjectDialog from '../../dialogs/MoreInfoProjectDialog';

function ProjectCard({ project, onEdit, onDelete }) {
  const { translate } = useLocale();
  const { openDialog } = useDialog();

  const handleClickMoreInfo = useCallback(() => {
    openDialog(MoreInfoProjectDialog, { project });
  }, [openDialog, project]);

  const handleClickEdit = useCallback(() => {
    openDialog(EditProjectDialog, { project, onEdit });
  }, [openDialog, project, onEdit]);

  const handleClickDelete = useCallback(() => {
    openDialog(DeleteProjectDialog, { project, onDelete });
  }, [project, onDelete, openDialog]);
  return (
    <EditableInfoCard
      title={project.name}
      onClickEdit={handleClickEdit}
      onClickDelete={handleClickDelete}
      onClickMoreInfo={handleClickMoreInfo}
      items={[
        {
          label: translate(DASHBOARD_TEXTS.PROJECT_NAME_LABEL),
          value: project.name,
        },
        {
          label: translate(DASHBOARD_TEXTS.PROJECT_DESCRIPTION_LABEL),
          value: project.description,
        },
        {
          label: translate(DASHBOARD_TEXTS.PROJECT_START_DATE_LABEL),
          value: project.startDate,
        },
        {
          label: translate(DASHBOARD_TEXTS.PROJECT_END_DATE_LABEL),
          value: project.endDate,
        },
        {
          label: translate(DASHBOARD_TEXTS.PROJECT_URL_LABEL),
          value: project.url,
        },
      ]}
    />
  );
}

export default ProjectCard;
