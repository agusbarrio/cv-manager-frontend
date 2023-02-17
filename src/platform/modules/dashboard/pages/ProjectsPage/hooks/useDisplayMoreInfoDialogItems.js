import { useCallback } from 'react';
import useLabels from './useLabels';

function useDisplayMoreInfoDialogItems() {
  const { labels } = useLabels();

  const displayMoreInfoDialogItems = useCallback(
    (project) => [
      {
        renderProps: {
          title: labels.name,
          children: project.name,
        },
      },
      {
        renderProps: {
          title: labels.description,
          children: project.description,
        },
      },
      {
        renderProps: {
          title: labels.startDate,
          children: project.startDate,
        },
      },
      {
        renderProps: {
          title: labels.endDate,
          children: project.endDate,
        },
      },
      {
        renderProps: {
          title: labels.url,
          children: project.url,
        },
      },
    ],
    [labels]
  );

  return { displayMoreInfoDialogItems };
}

export default useDisplayMoreInfoDialogItems;
