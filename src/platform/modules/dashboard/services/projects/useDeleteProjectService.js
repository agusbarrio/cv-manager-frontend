import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useDeleteProjectService() {
  const { del } = useDecoredFetch();
  const deleteProject = useCallback(
    async (id) => {
      const result = await del(`${DASHBOARD_ENDPOINTS.PROJECTS}/${id}`);
      return result;
    },
    [del]
  );
  return { deleteProject };
}

export default useDeleteProjectService;
