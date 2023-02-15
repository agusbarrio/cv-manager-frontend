import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useDeleteAllProjectsService() {
  const { del } = useDecoredFetch();
  const deleteAllProjects = useCallback(async () => {
    const result = await del(`${DASHBOARD_ENDPOINTS.PROJECTS}`);
    return result;
  }, [del]);
  return { deleteAllProjects };
}

export default useDeleteAllProjectsService;
