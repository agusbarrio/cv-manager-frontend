import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useAddExperienceService() {
  const { post } = useDecoredFetch();
  const addExperience = useCallback(
    async (values) => {
      const result = await post(DASHBOARD_ENDPOINTS.EXPERIENCES, values);
      return result;
    },
    [post]
  );
  return { addExperience };
}

export default useAddExperienceService;
