import { useCallback } from 'react';
import useDecoredFetch from '../../../core/hooks/useDecoredFetch';

import DASHBOARD_ENDPOINTS from '../../constants/endpoints';

function useGetSkillsService() {
  const { get } = useDecoredFetch();

  const getSkills = useCallback(
    async (values) => {
      const result = await get(
        DASHBOARD_ENDPOINTS.SKILLS,
        {},
        { showSuccessMessage: false }
      );
      return result;
    },
    [get]
  );
  return { getSkills };
}

export default useGetSkillsService;
