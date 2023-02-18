import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useEditEducationService() {
  const { put } = useDecoredFetch();
  const editEducation = useCallback(
    async (id, values) => {
      const result = await put(
        `${DASHBOARD_ENDPOINTS.EDUCATIONS}/${id}`,
        values
      );
      return result;
    },
    [put]
  );
  return { editEducation };
}

export default useEditEducationService;
