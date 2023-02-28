import { useCallback } from 'react';
import useLabels from './useLabels';
import DataList from '../../../../../../core/components/dataDisplay/DataList';
import Chip from '../../../../../../core/components/dataDisplay/Chip';

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
      {
        render: DataList,
        renderProps: {
          title: labels.skills,
          items: project.skills.map((skill) => ({
            render: Chip,
            renderProps: { label: skill.name },
          })),
        },
      },
      {
        renderProps: {
          title: labels.education,
          children: project.education?.degree,
        },
      },
      {
        renderProps: {
          title: labels.experience,
          children: project.experience?.title,
        },
      },
    ],
    [labels]
  );

  return { displayMoreInfoDialogItems };
}

export default useDisplayMoreInfoDialogItems;
