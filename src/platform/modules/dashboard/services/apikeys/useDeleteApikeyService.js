import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useDeleteApikeyService() {
  const { del } = useDecoredFetch();
  const deleteApikey = useCallback(
    async (id) => {
      const result = await del(`${DASHBOARD_ENDPOINTS.APIKEYS}/${id}`);
      return result;
    },
    [del]
  );
  return { deleteApikey };
}

export default useDeleteApikeyService;
