import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useEditIntroService() {
  const { put } = useDecoredFetch();
  const editIntro = useCallback(
    async (id, values) => {
      const result = await put(`${DASHBOARD_ENDPOINTS.INTROS}/${id}`, values);
      return result;
    },
    [put]
  );
  return { editIntro };
}

export default useEditIntroService;
