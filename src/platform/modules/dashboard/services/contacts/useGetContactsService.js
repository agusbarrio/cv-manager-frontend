import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useGetContactsService() {
  const { get } = useDecoredFetch();

  const getContacts = useCallback(
    async (values) => {
      const result = await get(
        DASHBOARD_ENDPOINTS.CONTACTS,
        {},
        { showSuccessMessage: false }
      );
      return result;
    },
    [get]
  );
  return { getContacts };
}

export default useGetContactsService;
