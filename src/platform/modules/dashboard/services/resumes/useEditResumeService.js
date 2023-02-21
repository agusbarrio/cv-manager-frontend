import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useEditResumeService() {
  const { put } = useDecoredFetch();
  const editResume = useCallback(
    async (id, values) => {
      const result = await put(`${DASHBOARD_ENDPOINTS.RESUMES}/${id}`, values);
      return result;
    },
    [put]
  );
  return { editResume };
}

export default useEditResumeService;
