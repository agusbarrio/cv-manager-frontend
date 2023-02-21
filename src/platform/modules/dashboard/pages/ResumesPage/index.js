import ABMTemplateV2 from '../../../core/components/templates/ABMTemplateV2';
import useAddResumeService from '../../services/resumes/useAddResumeService';

import useDeleteAllResumesService from '../../services/resumes/useDeleteAllResumesService';
import useGetResumesService from '../../services/resumes/useGetResumesService';
import useDeleteResumeService from '../../services/resumes/useDeleteResumeService';
import useEditResumeService from '../../services/resumes/useEditResumeService';
import useDisplayMoreInfoDialogItems from './hooks/useDisplayMoreInfoDialogItems';
import useDisplayCardItems from './hooks/useDisplayCardItems';
import ResumeForm from './components/ResumeForm';
import useFormatItems from './hooks/useFormatItems';

function ResumesPage() {
  const { addResume } = useAddResumeService();
  const { deleteAllResumes } = useDeleteAllResumesService();
  const { getResumes } = useGetResumesService();
  const { deleteResume } = useDeleteResumeService();
  const { editResume } = useEditResumeService();
  const { displayMoreInfoDialogItems } = useDisplayMoreInfoDialogItems();
  const { displayCardItems } = useDisplayCardItems();
  const { formatItems } = useFormatItems();
  return (
    <ABMTemplateV2
      add={{ service: addResume, form: ResumeForm }}
      deleteAll={{ service: deleteAllResumes }}
      getAll={{ service: getResumes, format: formatItems }}
      deleteOne={{ service: deleteResume }}
      editOne={{ service: editResume, form: ResumeForm }}
      viewOne={{
        displayTitle: (resume) => resume.title,
        displayMoreInfoDialogItems,
        displayCardItems,
      }}
    ></ABMTemplateV2>
  );
}

export default ResumesPage;
