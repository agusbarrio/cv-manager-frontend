import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useDeleteSkillService() {
  const { del } = useDecoredFetch();
  const deleteSkill = useCallback(
    async (id) => {
      const result = await del(`${DASHBOARD_ENDPOINTS.SKILLS}/${id}`);
      return result;
    },
    [del]
  );
  return { deleteSkill };
}

export default useDeleteSkillService;
