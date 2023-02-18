import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useGetEducationsService() {
  const { get } = useDecoredFetch();

  const getEducations = useCallback(
    async (values) => {
      const result = await get(
        DASHBOARD_ENDPOINTS.EDUCATIONS,
        {},
        { showSuccessMessage: false }
      );
      return result;
    },
    [get]
  );
  return { getEducations };
}

export default useGetEducationsService;
