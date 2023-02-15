import React, { useCallback, useMemo } from 'react';
import ABMTemplate from '../../../core/components/templates/ABMTemplate';
import useDialog from '../../../../../core/contexts/DialogContext/useDialog';
import AddProjectDialog from '../../components/contents/dialogs/AddProjectDialog';
import useGetProjectsService from '../../services/projects/useGetProjectsService';
import useService from '../../../core/hooks/useService';
import ProjectCard from '../../components/contents/cards/ProjectCard';
import DeleteAllProjectsDialog from '../../components/contents/dialogs/DeleteAllProjectsDialog';
import { useEffect } from 'react';
import _ from 'lodash';
function IntrosPage() {
  const { openDialog } = useDialog();
  const { getProjects } = useGetProjectsService();
  const {
    value: projects,
    loading,
    runService: refresh,
  } = useService({
    service: getProjects,
    defaultValue: [],
  });

  useEffect(() => {
    if (_.isFunction(refresh)) refresh();
  }, [refresh]);

  const handleClickAdd = useCallback(() => {
    openDialog(AddProjectDialog, { onAdd: refresh });
  }, [openDialog, refresh]);

  const handleClickDeleteAll = useCallback(() => {
    openDialog(DeleteAllProjectsDialog, { onDelete: refresh });
  }, [openDialog, refresh]);

  const deleteAllButtonDisabled = useMemo(
    () => projects?.length === 0,
    [projects]
  );

  return (
    <ABMTemplate
      onClickAdd={handleClickAdd}
      onClickDeleteAll={handleClickDeleteAll}
      deleteAllButtonDisabled={deleteAllButtonDisabled}
      loading={loading}
    >
      {console.log(projects)}
      {projects?.map((project, index) => (
        <ProjectCard
          project={project}
          key={index}
          onEdit={refresh}
          onDelete={refresh}
        ></ProjectCard>
      ))}
    </ABMTemplate>
  );
}

export default IntrosPage;
