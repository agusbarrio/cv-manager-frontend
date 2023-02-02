import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useDeleteAllIntrosService() {
  const { del } = useDecoredFetch();
  const deleteAllIntros = useCallback(async () => {
    const result = await del(`${DASHBOARD_ENDPOINTS.INTROS}`);
    return result;
  }, [del]);
  return { deleteAllIntros };
}

export default useDeleteAllIntrosService;
