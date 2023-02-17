import { useCallback } from 'react';
import useLabels from './useLabels';

function useDisplayMoreInfoDialogItems() {
  const { labels } = useLabels();

  const displayMoreInfoDialogItems = useCallback(
    (experience) => [
      {
        renderProps: {
          title: labels.title,
          children: experience.title,
        },
      },
      {
        renderProps: {
          title: labels.companyName,
          children: experience.companyName,
        },
      },
      {
        renderProps: {
          title: labels.location,
          children: experience.location,
        },
      },

      {
        renderProps: {
          title: labels.startDate,
          children: experience.startDate,
        },
      },
      {
        renderProps: {
          title: labels.endDate,
          children: experience.endDate,
        },
      },
      {
        renderProps: {
          title: labels.industry,
          children: experience.industry,
        },
      },
      {
        renderProps: {
          title: labels.description,
          children: experience.description,
        },
      },
      {
        renderProps: {
          title: labels.employmentType,
          children: labels.getEmploymentTypeLabel(experience.employmentType),
        },
      },
    ],
    [labels]
  );

  return { displayMoreInfoDialogItems };
}

export default useDisplayMoreInfoDialogItems;
