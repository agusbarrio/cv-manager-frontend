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
      {
        renderProps: {
          title: labels.imgSrc,
          children: skill.imgSrc,
        },
      },
    ],
    [labels]
  );

  return { displayMoreInfoDialogItems };
}

export default useDisplayMoreInfoDialogItems;
