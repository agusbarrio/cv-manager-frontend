import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useDeleteResumeService() {
  const { del } = useDecoredFetch();
  const deleteResume = useCallback(
    async (id) => {
      const result = await del(`${DASHBOARD_ENDPOINTS.RESUMES}/${id}`);
      return result;
    },
    [del]
  );
  return { deleteResume };
}

export default useDeleteResumeService;
