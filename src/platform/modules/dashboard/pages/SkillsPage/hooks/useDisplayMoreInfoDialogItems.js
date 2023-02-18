import { useCallback } from 'react';
import useLabels from './useLabels';

function useDisplayMoreInfoDialogItems() {
  const { labels } = useLabels();

  const displayMoreInfoDialogItems = useCallback(
    (skill) => [
      {
        renderProps: {
          title: labels.name,
          children: skill.name,
        },
      },
    ],
    [labels]
  );

  return { displayMoreInfoDialogItems };
}

export default useDisplayMoreInfoDialogItems;
