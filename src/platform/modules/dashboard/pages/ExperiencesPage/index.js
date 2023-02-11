import useDialog from '../../../../../core/contexts/DialogContext/useDialog';
import React, { useCallback, useMemo } from 'react';
import useGetExperiencesService from '../../services/experiences/useGetExperiencesService';
import useService from '../../../core/hooks/useService';
import ABMTemplate from '../../../core/components/templates/ABMTemplate';
import ExperienceCard from '../../components/contents/cards/ExperienceCard';
import AddExperienceDialog from '../../components/contents/dialogs/AddExperienceDialog';
import DeleteAllExperiencesDialog from '../../components/contents/dialogs/DeleteAllExperiencesDialog';
import _ from 'lodash';
function ExperiencesPage() {
  const { openDialog } = useDialog();
  const { getExperiences } = useGetExperiencesService();

  const formatData = useCallback(
    (data) =>
      _.map(data, (item) => {
        const employmentType = !!item.employmentType ? item.employmentType : '';
        return {
          ...item,
          employmentType,
        };
      }),
    []
  );

  const {
    value: experiences,
    runService: refresh,
    loading,
  } = useService({
    service: getExperiences,
    defaultValue: [],
    format: formatData,
    loadOnMount: true,
  });

  const handleClickAdd = useCallback(() => {
    openDialog(AddExperienceDialog, { onAdd: refresh });
  }, [openDialog, refresh]);

  const handleClickDeleteAll = useCallback(() => {
    openDialog(DeleteAllExperiencesDialog, { onDelete: refresh });
  }, [openDialog, refresh]);

  const deleteAllButtonDisabled = useMemo(
    () => experiences?.length === 0,
    [experiences]
  );

  return (
    <ABMTemplate
      onClickAdd={handleClickAdd}
      onClickDeleteAll={handleClickDeleteAll}
      deleteAllButtonDisabled={deleteAllButtonDisabled}
      loading={loading}
    >
      {experiences?.map((experience, index) => (
        <ExperienceCard
          experience={experience}
          key={index}
          onEdit={refresh}
          onDelete={refresh}
        ></ExperienceCard>
      ))}
    </ABMTemplate>
  );
}

export default ExperiencesPage;
