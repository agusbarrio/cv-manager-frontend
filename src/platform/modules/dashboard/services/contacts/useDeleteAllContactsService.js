import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useDeleteAllContactsService() {
  const { del } = useDecoredFetch();
  const deleteAllContacts = useCallback(async () => {
    const result = await del(`${DASHBOARD_ENDPOINTS.CONTACTS}`);
    return result;
  }, [del]);
  return { deleteAllContacts };
}

export default useDeleteAllContactsService;
