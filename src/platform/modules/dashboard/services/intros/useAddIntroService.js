import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useAddIntroService() {
  const { post } = useDecoredFetch();
  const addIntro = useCallback(
    async (values) => {
      const result = await post(DASHBOARD_ENDPOINTS.INTROS, values);
      return result;
    },
    [post]
  );
  return { addIntro };
}

export default useAddIntroService;
