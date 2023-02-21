import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useAddResumeService() {
  const { post } = useDecoredFetch();
  const addResume = useCallback(
    async (values) => {
      const result = await post(DASHBOARD_ENDPOINTS.RESUMES, values);
      return result;
    },
    [post]
  );
  return { addResume };
}

export default useAddResumeService;
