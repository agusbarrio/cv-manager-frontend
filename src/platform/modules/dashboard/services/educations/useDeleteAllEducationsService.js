import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useDeleteAllEducationsService() {
  const { del } = useDecoredFetch();
  const deleteAllEducations = useCallback(async () => {
    const result = await del(`${DASHBOARD_ENDPOINTS.EDUCATIONS}`);
    return result;
  }, [del]);
  return { deleteAllEducations };
}

export default useDeleteAllEducationsService;
