import { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
function useService(service, params, defaultValue, format) {
  const [value, setValue] = useState(defaultValue);
  const [loading, setLoading] = useState(true);

  const getServerData = useCallback(async () => {
    setLoading(true);
    const data = await service(params);
    const formatData = _.isFunction(format) ? format(data) : data;
    setLoading(false);
    setValue(formatData);
  }, [service, params, format]);

  useEffect(() => {
    if (_.isFunction(getServerData)) getServerData();
  }, [getServerData]);

  return { value, loading: loading || !value, refresh: getServerData };
}

export default useService;
