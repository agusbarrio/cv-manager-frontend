import { useCallback } from 'react';
import useLabels from './useLabels';

function useDisplayCardItems() {
  const { labels } = useLabels();

  const displayCardItems = useCallback(
    (intro) => [
      {
        renderProps: {
          label: labels.firstName,
          value: intro.firstName,
        },
      },
      {
        renderProps: {
          label: labels.lastName,
          value: intro.lastName,
        },
      },
      {
        renderProps: {
          label: labels.birthday,
          value: intro.birthday,
        },
      },
      {
        renderProps: {
          label: labels.about,
          value: intro.about,
        },
      },
    ],
    [labels]
  );

  return { displayCardItems };
}

export default useDisplayCardItems;
