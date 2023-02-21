import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useDeleteAllResumesService() {
  const { del } = useDecoredFetch();
  const deleteAllResumes = useCallback(async () => {
    const result = await del(`${DASHBOARD_ENDPOINTS.RESUMES}`);
    return result;
  }, [del]);
  return { deleteAllResumes };
}

export default useDeleteAllResumesService;
