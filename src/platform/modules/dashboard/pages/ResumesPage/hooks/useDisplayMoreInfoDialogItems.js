import { useCallback } from 'react';
import Chip from '../../../../../../core/components/dataDisplay/Chip';
import DataList from '../../../../../../core/components/dataDisplay/DataList';
import useLabels from './useLabels';

function useDisplayMoreInfoDialogItems() {
  const { labels } = useLabels();

  const displayMoreInfoDialogItems = useCallback(
    (resume) => [
      {
        renderProps: {
          title: labels.title,
          children: resume.title,
        },
      },

      {
        renderProps: {
          title: labels.intro,
          children: resume.intro.headLine,
        },
      },
      {
        renderProps: {
          title: labels.contact,
          children: resume.contact.title,
        },
      },
      {
        render: DataList,
        renderProps: {
          title: labels.experiences,
          items: resume.experiences.map((experience) => ({
            render: Chip,
            renderProps: { label: experience.title },
          })),
        },
      },
      {
        render: DataList,
        renderProps: {
          title: labels.skills,
          items: resume.skills.map((skill) => {
            console.log(skill.name);
            return {
              render: Chip,
              renderProps: { label: skill.name },
            };
          }),
        },
      },
      {
        render: DataList,
        renderProps: {
          title: labels.educations,
          items: resume.educations.map((education) => ({
            render: Chip,
            renderProps: { label: education.school },
          })),
        },
      },
      {
        render: DataList,
        renderProps: {
          title: labels.projects,
          items: resume.projects.map((projects) => ({
            render: Chip,
            renderProps: { label: projects.name },
          })),
        },
      },
    ],
    [labels]
  );

  return { displayMoreInfoDialogItems };
}

export default useDisplayMoreInfoDialogItems;
