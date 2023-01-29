import { useCallback, useEffect, useState } from 'react';
import _ from 'lodash';
function useService(service, params, defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const [loading, setLoading] = useState(true);

  const getServerData = useCallback(async () => {
    setLoading(true);
    const data = await service(params);
    setLoading(false);
    setValue(data);
  }, [service, params]);

  useEffect(() => {
    if (_.isFunction(getServerData)) getServerData();
  }, [getServerData]);

  return { value, loading: loading || !value, refresh: getServerData };
}

export default useService;
