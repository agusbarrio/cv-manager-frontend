import useGetSkillsService from '../../../services/skills/useGetSkillsService';
import SelectInputWithService from '../../../../core/components/inputs/SelectInputWithService';

function SkillsSelectInput({ ...props }) {
  const { getSkills } = useGetSkillsService();
  return (
    <SelectInputWithService
      itemValueGetter={(skill) => skill.id}
      itemLabelGetter={(skill) => skill.name}
      service={getSkills}
      {...props}
    />
  );
}

export default SkillsSelectInput;
