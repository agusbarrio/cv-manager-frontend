import useGetResumesService from '../../../services/resumes/useGetResumesService';

import SelectInputWithService from '../../../../core/components/inputs/SelectInputWithService';
function ResumesSelectInput({ ...props }) {
  const { getResumes } = useGetResumesService();
  return (
    <SelectInputWithService
      itemValueGetter={(resume) => resume.id}
      itemLabelGetter={(resume) => resume.title}
      service={getResumes}
      {...props}
    />
  );
}

export default ResumesSelectInput;
