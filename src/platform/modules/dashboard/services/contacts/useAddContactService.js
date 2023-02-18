import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useAddContactService() {
  const { post } = useDecoredFetch();
  const addContact = useCallback(
    async (values) => {
      const result = await post(DASHBOARD_ENDPOINTS.CONTACTS, values);
      return result;
    },
    [post]
  );
  return { addContact };
}

export default useAddContactService;
