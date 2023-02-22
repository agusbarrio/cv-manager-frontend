import { useCallback } from 'react';
import useLabels from './useLabels';

function useDisplayCardItems() {
  const { labels } = useLabels();
  const displayCardItems = useCallback(
    (resume) => {
      return [
        {
          renderProps: {
            label: labels.title,
            value: resume.title,
          },
        },
        {
          renderProps: {
            label: labels.intro,
            value: resume.intro.headLine,
          },
        },
        {
          renderProps: {
            label: labels.contact,
            value: resume.contact.title,
          },
        },
        {
          renderProps: {
            label: labels.experiences,
            value: resume.experiences
              .map((experience) => experience.title)
              .join(' - '),
          },
        },
        {
          renderProps: {
            label: labels.skills,
            value: resume.skills.map((skill) => skill.name).join(' - '),
          },
        },
        {
          renderProps: {
            label: labels.educations,
            value: resume.educations
              .map((education) => education.school)
              .join(' - '),
          },
        },
        {
          renderProps: {
            label: labels.projects,
            value: resume.projects.map((projects) => projects.name).join(' - '),
          },
        },
      ];
    },
    [labels]
  );

  return { displayCardItems };
}

export default useDisplayCardItems;
