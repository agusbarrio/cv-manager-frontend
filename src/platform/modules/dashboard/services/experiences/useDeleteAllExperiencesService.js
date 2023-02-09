import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useDeleteAllExperiencesService() {
  const { del } = useDecoredFetch();
  const deleteAllExperiences = useCallback(async () => {
    const result = await del(`${DASHBOARD_ENDPOINTS.EXPERIENCES}`);
    return result;
  }, [del]);
  return { deleteAllExperiences };
}

export default useDeleteAllExperiencesService;
