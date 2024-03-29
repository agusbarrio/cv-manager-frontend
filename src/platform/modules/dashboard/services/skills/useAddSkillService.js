import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useAddSkillService() {
  const { post } = useDecoredFetch();
  const addSkill = useCallback(
    async (values) => {
      const result = await post(DASHBOARD_ENDPOINTS.SKILLS, values);
      return result;
    },
    [post]
  );
  return { addSkill };
}

export default useAddSkillService;
