import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useGetIntrosService() {
  const { get } = useDecoredFetch();

  const getIntros = useCallback(
    async (values) => {
      const result = await get(
        DASHBOARD_ENDPOINTS.INTROS,
        {},
        { showSuccessMessage: false }
      );
      return result;
    },
    [get]
  );
  return { getIntros };
}

export default useGetIntrosService;
