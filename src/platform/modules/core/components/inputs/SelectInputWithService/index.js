import { useEffect, useMemo } from 'react';
import useService from '../../../hooks/useService';
import _ from 'lodash';
import SelectInput from '../../../../../../core/components/inputs/SelectInput';
function SelectInputWithService({
  itemValueGetter,
  itemLabelGetter,
  service,
  ...props
}) {
  const { value, runService, loading } = useService({
    service,
    defaultValue: [],
  });

  useEffect(() => {
    runService();
  }, [runService]);

  const list = useMemo(() => {
    return _.map(value, (option) => ({
      value: itemValueGetter(option),
      children: itemLabelGetter(option),
    }));
  }, [value, itemLabelGetter, itemValueGetter]);

  return <SelectInput loading={loading} list={list} {...props} />;
}

export default SelectInputWithService;
