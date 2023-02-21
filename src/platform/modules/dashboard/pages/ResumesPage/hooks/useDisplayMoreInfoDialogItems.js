import { useCallback } from 'react';
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
        renderProps: {
          title: labels.experiences,
          children: resume.experiences
            .map((experience) => experience.title)
            .join(' - '),
        },
      },
      {
        renderProps: {
          title: labels.skills,
          children: resume.skills.map((skill) => skill.name).join(' - '),
        },
      },
      {
        renderProps: {
          title: labels.educations,
          children: resume.educations
            .map((education) => education.school)
            .join(' - '),
        },
      },
      {
        renderProps: {
          title: labels.projects,
          children: resume.projects
            .map((projects) => projects.name)
            .join(' - '),
        },
      },
    ],
    [labels]
  );

  return { displayMoreInfoDialogItems };
}

export default useDisplayMoreInfoDialogItems;
