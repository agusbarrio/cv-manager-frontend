import useGetProjectsService from '../../../services/projects/useGetProjectsService';

import SelectInputWithService from '../../../../core/components/inputs/SelectInputWithService';
function ProjectsSelectInput({ ...props }) {
  const { getProjects } = useGetProjectsService();
  return (
    <SelectInputWithService
      itemValueGetter={(project) => project.id}
      itemLabelGetter={(project) => project.name}
      service={getProjects}
      {...props}
    />
  );
}

export default ProjectsSelectInput;
