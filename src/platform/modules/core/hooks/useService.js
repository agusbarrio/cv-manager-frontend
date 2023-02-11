import { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
function useService({ service, params, defaultValue, format, loadOnMount }) {
  const [value, setValue] = useState(defaultValue);
  const [loading, setLoading] = useState(loadOnMount ? true : false);
  const getServerData = useCallback(
    async (variables) => {
      setLoading(true);
      const data = await service(variables || params);
      const formatData = _.isFunction(format) ? format(data) : data;
      setLoading(false);
      setValue(formatData);
    },
    [service, params, format]
  );

  useEffect(() => {
    if (_.isFunction(getServerData) && loadOnMount) getServerData();
  }, [getServerData, loadOnMount]);

  return { value, loading: loading, runService: getServerData };
}

export default useService;
