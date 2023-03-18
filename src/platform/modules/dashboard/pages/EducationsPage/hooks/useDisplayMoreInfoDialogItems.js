import { useCallback } from 'react';
import useLabels from './useLabels';
import DataList from '../../../../../../core/components/dataDisplay/DataList';
import Chip from '../../../../../../core/components/dataDisplay/Chip';

function useDisplayMoreInfoDialogItems() {
  const { labels } = useLabels();
  /* 
school: translate(DASHBOARD_TEXTS.EDUCATION_SCHOOL_LABEL),
      degree: translate(DASHBOARD_TEXTS.EDUCATION_DEGREE_LABEL),
      fieldOfStudy: translate(DASHBOARD_TEXTS.EDUCATION_FIELD_OF_STUDY_LABEL),
      startDate: translate(DASHBOARD_TEXTS.EDUCATION_START_DATE_LABEL),
      endDate: translate(DASHBOARD_TEXTS.EDUCATION_END_DATE_LABEL),
      grade: translate(DASHBOARD_TEXTS.EDUCATION_GRADE_LABEL),
      activities: translate(DASHBOARD_TEXTS.EDUCATION_ACTIVITIES_LABEL),
      description: translate(DASHBOARD_TEXTS.EDUCATION_DESCRIPTION_LABEL), */
  const displayMoreInfoDialogItems = useCallback(
    (education) => [
      {
        renderProps: {
          title: labels.school,
          children: education.school,
        },
      },
      {
        renderProps: {
          title: labels.degree,
          children: education.degree,
        },
      },
      {
        renderProps: {
          title: labels.fieldOfStudy,
          children: education.fieldOfStudy,
        },
      },

      {
        renderProps: {
          title: labels.startDate,
          children: education.startDate,
        },
      },
      {
        renderProps: {
          title: labels.endDate,
          children: education.endDate,
        },
      },
      {
        renderProps: {
          title: labels.grade,
          children: education.grade,
        },
      },
      {
        renderProps: {
          title: labels.activities,
          children: education.activities,
        },
      },
      {
        renderProps: {
          title: labels.description,
          children: education.description,
        },
      },
      {
        render: DataList,
        renderProps: {
          title: labels.skills,
          items: education.skills.map((skill) => ({
            render: Chip,
            renderProps: { label: skill.name },
          })),
        },
      },
      {
        renderProps: {
          title: labels.imgSrc,
          children: education.imgSrc,
        },
      },
    ],
    [labels]
  );

  return { displayMoreInfoDialogItems };
}

export default useDisplayMoreInfoDialogItems;
