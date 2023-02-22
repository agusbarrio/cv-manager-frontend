import { useCallback } from 'react';
import useLabels from './useLabels';

function useDisplayCardItems() {
  const { labels } = useLabels();
  const displayCardItems = useCallback(
    (apikey) => [
      {
        renderProps: {
          label: labels.title,
          value: apikey.title,
        },
      },
      {
        renderProps: {
          label: labels.resume,
          value: apikey.resume.title,
        },
      },
    ],
    [labels]
  );

  return { displayCardItems };
}

export default useDisplayCardItems;
