import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useAddApikeyService() {
  const { post } = useDecoredFetch();
  const addApikey = useCallback(
    async (values) => {
      const result = await post(DASHBOARD_ENDPOINTS.APIKEYS, values);
      return result;
    },
    [post]
  );
  return { addApikey };
}

export default useAddApikeyService;
