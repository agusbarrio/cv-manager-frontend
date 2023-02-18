import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useDeleteContactService() {
  const { del } = useDecoredFetch();
  const deleteContact = useCallback(
    async (id) => {
      const result = await del(`${DASHBOARD_ENDPOINTS.CONTACTS}/${id}`);
      return result;
    },
    [del]
  );
  return { deleteContact };
}

export default useDeleteContactService;
