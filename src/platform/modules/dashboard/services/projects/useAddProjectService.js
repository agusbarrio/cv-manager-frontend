import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useAddProjectService() {
  const { post } = useDecoredFetch();
  const addProject = useCallback(
    async (values) => {
      const result = await post(DASHBOARD_ENDPOINTS.PROJECTS, values);
      return result;
    },
    [post]
  );
  return { addProject };
}

export default useAddProjectService;
