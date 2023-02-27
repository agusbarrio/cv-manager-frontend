import { useCallback } from 'react';
import _ from 'lodash';
function useFormatItems() {
  const formatItems = useCallback(
    (items) =>
      _.map(items, (item) => {
        return {
          ...item,
          skillsIds: _.get(item, 'skills', []).map((skill) => skill.id),
        };
      }),
    []
  );

  return { formatItems };
}

export default useFormatItems;
