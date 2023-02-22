import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useDeleteAllApikeysService() {
  const { del } = useDecoredFetch();
  const deleteAllApikeys = useCallback(async () => {
    const result = await del(`${DASHBOARD_ENDPOINTS.APIKEYS}`);
    return result;
  }, [del]);
  return { deleteAllApikeys };
}

export default useDeleteAllApikeysService;
