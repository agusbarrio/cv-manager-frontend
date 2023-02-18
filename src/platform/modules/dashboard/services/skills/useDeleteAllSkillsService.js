import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useDeleteAllSkillsService() {
  const { del } = useDecoredFetch();
  const deleteAllSkills = useCallback(async () => {
    const result = await del(`${DASHBOARD_ENDPOINTS.SKILLS}`);
    return result;
  }, [del]);
  return { deleteAllSkills };
}

export default useDeleteAllSkillsService;
