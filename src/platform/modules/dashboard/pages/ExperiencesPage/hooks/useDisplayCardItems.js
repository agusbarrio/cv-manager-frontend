import { useCallback } from 'react';
import useLabels from './useLabels';

function useDisplayCardItems() {
  const { labels } = useLabels();
  const displayCardItems = useCallback(
    (experience) => [
      {
        renderProps: {
          label: labels.companyName,
          value: experience.companyName,
        },
      },
      {
        renderProps: {
          label: labels.location,
          value: experience.location,
        },
      },
      {
        renderProps: {
          label: labels.startDate,
          value: experience.startDate,
        },
      },
      {
        renderProps: {
          label: labels.endDate,
          value: experience.endDate,
        },
      },
      {
        renderProps: {
          label: labels.industry,
          value: experience.industry,
        },
      },
      {
        renderProps: {
          label: labels.description,
          value: experience.description,
        },
      },
      {
        renderProps: {
          label: labels.employmentType,
          value: labels.getEmploymentTypeLabel(experience.employmentType),
        },
      },
    ],
    [labels]
  );

  return { displayCardItems };
}

export default useDisplayCardItems;
