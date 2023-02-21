import SelectInputWithService from '../../../../core/components/inputs/SelectInputWithService';
import useGetIntrosService from '../../../services/intros/useGetIntrosService';

function IntrosSelectInput({ ...props }) {
  const { getIntros } = useGetIntrosService();
  return (
    <SelectInputWithService
      itemValueGetter={(intro) => intro.id}
      itemLabelGetter={(intro) => intro.headLine}
      service={getIntros}
      {...props}
    />
  );
}

export default IntrosSelectInput;
