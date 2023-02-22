import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useGetApikeysService() {
  const { get } = useDecoredFetch();

  const getApikeys = useCallback(
    async (values) => {
      const result = await get(
        DASHBOARD_ENDPOINTS.APIKEYS,
        {},
        { showSuccessMessage: false }
      );
      return result;
    },
    [get]
  );
  return { getApikeys };
}

export default useGetApikeysService;
