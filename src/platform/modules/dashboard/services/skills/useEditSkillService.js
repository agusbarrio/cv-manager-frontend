import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useEditSkillService() {
  const { put } = useDecoredFetch();
  const editSkill = useCallback(
    async (id, values) => {
      const result = await put(`${DASHBOARD_ENDPOINTS.SKILLS}/${id}`, values);
      return result;
    },
    [put]
  );
  return { editSkill };
}

export default useEditSkillService;
