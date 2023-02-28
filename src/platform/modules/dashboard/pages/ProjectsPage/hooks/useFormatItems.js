import { useCallback } from 'react';
import _ from 'lodash';
function useFormatItems() {
  const formatItems = useCallback(
    (items) =>
      _.map(items, (item) => {
        return {
          ...item,
          skillsIds: _.get(item, 'skills', []).map((skill) => skill.id),
          experienceId: !!item?.experienceId ? item.experienceId : '',
          educationId: !!item?.educationId ? item.educationId : '',
        };
      }),
    []
  );

  return { formatItems };
}

export default useFormatItems;
