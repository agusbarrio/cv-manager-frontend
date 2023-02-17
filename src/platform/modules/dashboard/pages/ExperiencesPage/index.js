import ABMTemplateV2 from '../../../core/components/templates/ABMTemplateV2';
import useAddExperienceService from '../../services/experiences/useAddExperienceService';
import ExperienceForm from '../../components/contents/forms/ExperienceForm';
import useDeleteAllExperiencesService from '../../services/experiences/useDeleteAllExperiencesService';
import useGetExperiencesService from '../../services/experiences/useGetExperiencesService';
import useDeleteExperienceService from '../../services/experiences/useDeleteExperienceService';
import useEditExperienceService from '../../services/experiences/useEditExperienceService';
import useDisplayMoreInfoDialogItems from './hooks/useDisplayMoreInfoDialogItems';
import useDisplayCardItems from './hooks/useDisplayCardItems';
import useFormatItems from './hooks/useFormatItems';

function ExperiencesPage() {
  const { addExperience } = useAddExperienceService();
  const { deleteAllExperiences } = useDeleteAllExperiencesService();
  const { getExperiences } = useGetExperiencesService();
  const { deleteExperience } = useDeleteExperienceService();
  const { editExperience } = useEditExperienceService();
  const { displayMoreInfoDialogItems } = useDisplayMoreInfoDialogItems();
  const { displayCardItems } = useDisplayCardItems();
  const { formatItems } = useFormatItems();
  return (
    <ABMTemplateV2
      add={{ service: addExperience, form: ExperienceForm }}
      deleteAll={{ service: deleteAllExperiences }}
      getAll={{ service: getExperiences, format: formatItems }}
      deleteOne={{ service: deleteExperience }}
      editOne={{ service: editExperience, form: ExperienceForm }}
      viewOne={{
        displayTitle: (experience) => experience.title,
        displayMoreInfoDialogItems,
        displayCardItems,
      }}
    ></ABMTemplateV2>
  );
}

export default ExperiencesPage;
