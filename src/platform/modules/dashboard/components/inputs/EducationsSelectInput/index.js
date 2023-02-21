import useGetEducationsService from '../../../services/educations/useGetEducationsService';
import SelectInputWithService from '../../../../core/components/inputs/SelectInputWithService';

function EducationsSelectInput({ ...props }) {
  const { getEducations } = useGetEducationsService();
  return (
    <SelectInputWithService
      itemValueGetter={(education) => education.id}
      itemLabelGetter={(education) => education.school}
      service={getEducations}
      {...props}
    />
  );
}

export default EducationsSelectInput;
