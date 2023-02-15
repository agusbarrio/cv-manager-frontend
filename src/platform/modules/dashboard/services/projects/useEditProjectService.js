import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useEditProjectService() {
  const { put } = useDecoredFetch();
  const editProject = useCallback(
    async ({ id, ...values }) => {
      const result = await put(`${DASHBOARD_ENDPOINTS.PROJECTS}/${id}`, values);
      return result;
    },
    [put]
  );
  return { editProject };
}

export default useEditProjectService;
