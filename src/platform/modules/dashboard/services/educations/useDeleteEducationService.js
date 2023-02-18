import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useDeleteEducationService() {
  const { del } = useDecoredFetch();
  const deleteEducation = useCallback(
    async (id) => {
      const result = await del(`${DASHBOARD_ENDPOINTS.EDUCATIONS}/${id}`);
      return result;
    },
    [del]
  );
  return { deleteEducation };
}

export default useDeleteEducationService;
