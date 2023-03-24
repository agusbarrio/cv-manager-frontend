import { useCallback, useState } from 'react';
import _ from 'lodash';
function useService({ service, defaultValue, format }) {
  const [value, setValue] = useState(defaultValue);
  const [loading, setLoading] = useState(false);

  const runService = useCallback(
    async (...variables) => {
      setLoading(true);
      const data = await service(...variables);
      const formatData = _.isFunction(format) ? format(data) : data;
      setValue(formatData);
      setLoading(false);
    },
    [service, format]
  );

  return { value, loading, runService };
}

export default useService;
