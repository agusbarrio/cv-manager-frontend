import { useCallback } from 'react';
import useLabels from './useLabels';

function useDisplayMoreInfoDialogItems() {
  const { labels } = useLabels();

  const displayMoreInfoDialogItems = useCallback(
    (intro) => [
      {
        renderProps: {
          title: labels.headLine,
          children: intro.headLine,
        },
      },
      {
        renderProps: {
          title: labels.firstName,
          children: intro.firstName,
        },
      },
      {
        renderProps: {
          title: labels.lastName,
          children: intro.lastName,
        },
      },

      {
        renderProps: {
          title: labels.birthday,
          children: intro.birthday,
        },
      },
      {
        renderProps: {
          title: labels.about,
          children: intro.about,
        },
      },
    ],
    [labels]
  );

  return { displayMoreInfoDialogItems };
}

export default useDisplayMoreInfoDialogItems;
