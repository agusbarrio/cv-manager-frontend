import ABMTemplateV2 from '../../../core/components/templates/ABMTemplateV2';
import useAddEducationService from '../../services/educations/useAddEducationService';
import EducationForm from '../../components/contents/forms/EducationForm';
import useDeleteAllEducationsService from '../../services/educations/useDeleteAllEducationsService';
import useGetEducationsService from '../../services/educations/useGetEducationsService';
import useDeleteEducationService from '../../services/educations/useDeleteEducationService';
import useEditEducationService from '../../services/educations/useEditEducationService';
import useDisplayMoreInfoDialogItems from './hooks/useDisplayMoreInfoDialogItems';
import useDisplayCardItems from './hooks/useDisplayCardItems';

function EducationsPage() {
  const { addEducation } = useAddEducationService();
  const { deleteAllEducations } = useDeleteAllEducationsService();
  const { getEducations } = useGetEducationsService();
  const { deleteEducation } = useDeleteEducationService();
  const { editEducation } = useEditEducationService();
  const { displayMoreInfoDialogItems } = useDisplayMoreInfoDialogItems();
  const { displayCardItems } = useDisplayCardItems();
  return (
    <ABMTemplateV2
      add={{ service: addEducation, form: EducationForm }}
      deleteAll={{ service: deleteAllEducations }}
      getAll={{ service: getEducations }}
      deleteOne={{ service: deleteEducation }}
      editOne={{ service: editEducation, form: EducationForm }}
      viewOne={{
        displayTitle: (education) => education.school,
        displayMoreInfoDialogItems,
        displayCardItems,
      }}
    ></ABMTemplateV2>
  );
}

export default EducationsPage;
