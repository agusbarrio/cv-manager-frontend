import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useCreateIntroService() {
  const { post } = useDecoredFetch();
  const createIntro = useCallback(
    async (values) => {
      const result = await post(DASHBOARD_ENDPOINTS.INTROS, values);
      return result;
    },
    [post]
  );
  return { createIntro };
}

export default useCreateIntroService;
