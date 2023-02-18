import ABMTemplateV2 from '../../../core/components/templates/ABMTemplateV2';
import useAddSkillService from '../../services/skills/useAddSkillService';
import SkillForm from '../../components/contents/forms/SkillForm';
import useDeleteAllSkillsService from '../../services/skills/useDeleteAllSkillsService';
import useGetSkillsService from '../../services/skills/useGetSkillsService';
import useDeleteSkillService from '../../services/skills/useDeleteSkillService';
import useEditSkillService from '../../services/skills/useEditSkillService';
import useDisplayMoreInfoDialogItems from './hooks/useDisplayMoreInfoDialogItems';

function SkillsPage() {
  const { addSkill } = useAddSkillService();
  const { deleteAllSkills } = useDeleteAllSkillsService();
  const { getSkills } = useGetSkillsService();
  const { deleteSkill } = useDeleteSkillService();
  const { editSkill } = useEditSkillService();
  const { displayMoreInfoDialogItems } = useDisplayMoreInfoDialogItems();

  return (
    <ABMTemplateV2
      add={{ service: addSkill, form: SkillForm }}
      deleteAll={{ service: deleteAllSkills }}
      getAll={{ service: getSkills }}
      deleteOne={{ service: deleteSkill }}
      editOne={{ service: editSkill, form: SkillForm }}
      viewOne={{
        displayTitle: (skill) => skill.name,
        displayMoreInfoDialogItems,
      }}
    ></ABMTemplateV2>
  );
}

export default SkillsPage;
