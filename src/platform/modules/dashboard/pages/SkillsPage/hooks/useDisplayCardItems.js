import { useCallback } from 'react';
import useLabels from './useLabels';

function useDisplayCardItems() {
  const { labels } = useLabels();

  const displayCardItems = useCallback(
    (skill) => [
      {
        renderProps: {
          label: labels.imgSrc,
          value: skill.imgSrc,
        },
      },
    ],
    [labels]
  );

  return { displayCardItems };
}

export default useDisplayCardItems;
