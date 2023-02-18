import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useAddEducationService() {
  const { post } = useDecoredFetch();
  const addEducation = useCallback(
    async (values) => {
      const result = await post(DASHBOARD_ENDPOINTS.EDUCATIONS, values);
      return result;
    },
    [post]
  );
  return { addEducation };
}

export default useAddEducationService;
