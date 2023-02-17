import { useCallback } from 'react';
import useLabels from './useLabels';

function useDisplayCardItems() {
  const { labels } = useLabels();

  const displayCardItems = useCallback(
    (project) => [
      {
        renderProps: {
          label: labels.description,
          value: project.description,
        },
      },
      {
        renderProps: {
          label: labels.startDate,
          value: project.startDate,
        },
      },
      {
        renderProps: {
          label: labels.endDate,
          value: project.endDate,
        },
      },
      {
        renderProps: {
          label: labels.url,
          value: project.url,
        },
      },
    ],
    [labels]
  );

  return { displayCardItems };
}

export default useDisplayCardItems;
