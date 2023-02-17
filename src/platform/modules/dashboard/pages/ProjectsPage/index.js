import ABMTemplateV2 from '../../../core/components/templates/ABMTemplateV2';
import useAddProjectService from '../../services/projects/useAddProjectService';
import ProjectForm from '../../components/contents/forms/ProjectForm';
import useDeleteAllProjectsService from '../../services/projects/useDeleteAllProjectsService';
import useGetProjectsService from '../../services/projects/useGetProjectsService';
import useDeleteProjectService from '../../services/projects/useDeleteProjectService';
import useEditProjectService from '../../services/projects/useEditProjectService';
import useDisplayMoreInfoDialogItems from './hooks/useDisplayMoreInfoDialogItems';
import useDisplayCardItems from './hooks/useDisplayCardItems';

function ProjectsPage() {
  const { addProject } = useAddProjectService();
  const { deleteAllProjects } = useDeleteAllProjectsService();
  const { getProjects } = useGetProjectsService();
  const { deleteProject } = useDeleteProjectService();
  const { editProject } = useEditProjectService();
  const { displayMoreInfoDialogItems } = useDisplayMoreInfoDialogItems();
  const { displayCardItems } = useDisplayCardItems();

  return (
    <ABMTemplateV2
      add={{ service: addProject, form: ProjectForm }}
      deleteAll={{ service: deleteAllProjects }}
      getAll={{ service: getProjects, format: (projects) => projects }}
      deleteOne={{ service: deleteProject }}
      editOne={{ service: editProject, form: ProjectForm }}
      viewOne={{
        displayTitle: (project) => project.name,
        displayMoreInfoDialogItems,
        displayCardItems,
      }}
    ></ABMTemplateV2>
  );
}

export default ProjectsPage;
