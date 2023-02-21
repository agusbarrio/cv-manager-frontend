import { useCallback } from 'react';
import _ from 'lodash';
function useFormatItems() {
  const formatItems = useCallback(
    (items) =>
      _.map(items, (item) => {
        return {
          ...item,
          experiencesIds: _.get(item, 'experiences', []).map(
            (experience) => experience.id
          ),
          projectsIds: _.get(item, 'projects', []).map((project) => project.id),
          skillsIds: _.get(item, 'skills', []).map((skill) => skill.id),
          educationsIds: _.get(item, 'educations', []).map(
            (education) => education.id
          ),
        };
      }),
    []
  );

  return { formatItems };
}

export default useFormatItems;
