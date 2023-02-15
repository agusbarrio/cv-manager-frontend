import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useGetProjectsService() {
  const { get } = useDecoredFetch();

  const getProjects = useCallback(
    async (values) => {
      const result = await get(
        DASHBOARD_ENDPOINTS.PROJECTS,
        {},
        { showSuccessMessage: false }
      );
      return result;
    },
    [get]
  );
  return { getProjects };
}

export default useGetProjectsService;
