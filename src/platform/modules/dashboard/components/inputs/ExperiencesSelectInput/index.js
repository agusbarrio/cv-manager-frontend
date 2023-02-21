import useGetExperiencesService from '../../../services/experiences/useGetExperiencesService';

import SelectInputWithService from '../../../../core/components/inputs/SelectInputWithService';
function ExperiencesSelectInput({ ...props }) {
  const { getExperiences } = useGetExperiencesService();
  return (
    <SelectInputWithService
      itemValueGetter={(experience) => experience.id}
      itemLabelGetter={(experience) => experience.title}
      service={getExperiences}
      {...props}
    />
  );
}

export default ExperiencesSelectInput;
