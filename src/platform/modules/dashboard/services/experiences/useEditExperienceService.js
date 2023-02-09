import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useEditExperienceService() {
  const { put } = useDecoredFetch();
  const editExperience = useCallback(
    async (id, values) => {
      const result = await put(
        `${DASHBOARD_ENDPOINTS.EXPERIENCES}/${id}`,
        values
      );
      return result;
    },
    [put]
  );
  return { editExperience };
}

export default useEditExperienceService;
