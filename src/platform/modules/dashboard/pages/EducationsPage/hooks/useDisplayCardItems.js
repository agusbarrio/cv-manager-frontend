import { useCallback } from 'react';
import useLabels from './useLabels';

function useDisplayCardItems() {
  const { labels } = useLabels();
  const displayCardItems = useCallback(
    (education) => [
      {
        renderProps: {
          label: labels.degree,
          value: education.degree,
        },
      },
      {
        renderProps: {
          label: labels.fieldOfStudy,
          value: education.fieldOfStudy,
        },
      },

      {
        renderProps: {
          label: labels.startDate,
          value: education.startDate,
        },
      },
      {
        renderProps: {
          label: labels.endDate,
          value: education.endDate,
        },
      },
      {
        renderProps: {
          label: labels.grade,
          value: education.grade,
        },
      },
      {
        renderProps: {
          label: labels.activities,
          value: education.activities,
        },
      },
      {
        renderProps: {
          label: labels.description,
          value: education.description,
        },
      },
    ],
    [labels]
  );

  return { displayCardItems };
}

export default useDisplayCardItems;
