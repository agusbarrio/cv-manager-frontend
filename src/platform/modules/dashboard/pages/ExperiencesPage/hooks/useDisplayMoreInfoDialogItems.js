import { useCallback } from 'react';
import useLabels from './useLabels';
import DataList from '../../../../../../core/components/dataDisplay/DataList';
import Chip from '../../../../../../core/components/dataDisplay/Chip';

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
      {
        render: DataList,
        renderProps: {
          title: labels.skills,
          items: experience.skills.map((skill) => ({
            render: Chip,
            renderProps: { label: skill.name },
          })),
        },
      },
      {
        renderProps: {
          title: labels.imgSrc,
          children: experience.imgSrc,
        },
      },
    ],
    [labels]
  );

  return { displayMoreInfoDialogItems };
}

export default useDisplayMoreInfoDialogItems;
