import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useGetExperienceService() {
  const { get } = useDecoredFetch();

  const getExperiences = useCallback(
    async (values) => {
      const result = await get(
        DASHBOARD_ENDPOINTS.EXPERIENCES,
        {},
        { showSuccessMessage: false }
      );
      return result;
    },
    [get]
  );
  return { getExperiences };
}

export default useGetExperienceService;
