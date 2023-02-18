import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useEditContactService() {
  const { put } = useDecoredFetch();
  const editContact = useCallback(
    async (id, values) => {
      const result = await put(`${DASHBOARD_ENDPOINTS.CONTACTS}/${id}`, values);
      return result;
    },
    [put]
  );
  return { editContact };
}

export default useEditContactService;
