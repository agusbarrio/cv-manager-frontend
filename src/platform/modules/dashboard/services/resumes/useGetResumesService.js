import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useGetResumesService() {
  const { get } = useDecoredFetch();

  const getResumes = useCallback(
    async (values) => {
      const result = await get(
        DASHBOARD_ENDPOINTS.RESUMES,
        {},
        { showSuccessMessage: false }
      );
      return result;
    },
    [get]
  );
  return { getResumes };
}

export default useGetResumesService;
