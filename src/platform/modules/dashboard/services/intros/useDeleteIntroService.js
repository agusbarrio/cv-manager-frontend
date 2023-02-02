import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useDeleteIntroService() {
  const { del } = useDecoredFetch();
  const deleteIntro = useCallback(
    async (id) => {
      const result = await del(`${DASHBOARD_ENDPOINTS.INTROS}/${id}`);
      return result;
    },
    [del]
  );
  return { deleteIntro };
}

export default useDeleteIntroService;
