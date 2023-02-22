import { useCallback } from 'react';
import useLabels from './useLabels';

function useDisplayMoreInfoDialogItems() {
  const { labels } = useLabels();

  const displayMoreInfoDialogItems = useCallback(
    (apikey) => [
      {
        renderProps: {
          title: labels.title,
          children: apikey.title,
        },
      },
      {
        renderProps: {
          title: labels.resume,
          children: apikey.resume.title,
        },
      },
      {
        renderProps: {
          title: labels.id,
          children: apikey.id,
        },
      },
    ],
    [labels]
  );

  return { displayMoreInfoDialogItems };
}

export default useDisplayMoreInfoDialogItems;
