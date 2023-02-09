import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useDeleteExperienceService() {
  const { del } = useDecoredFetch();
  const deleteExperience = useCallback(
    async (id) => {
      const result = await del(`${DASHBOARD_ENDPOINTS.EXPERIENCES}/${id}`);
      return result;
    },
    [del]
  );
  return { deleteExperience };
}

export default useDeleteExperienceService;
