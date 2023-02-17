import { useCallback } from 'react';
import _ from 'lodash';
function useFormatItems() {
  const formatItems = useCallback(
    (items) =>
      _.map(items, (item) => {
        const employmentType = !!item.employmentType ? item.employmentType : '';
        return {
          ...item,
          employmentType,
        };
      }),
    []
  );

  return { formatItems };
}

export default useFormatItems;
