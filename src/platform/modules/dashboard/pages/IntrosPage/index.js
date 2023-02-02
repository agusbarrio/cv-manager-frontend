import React, { useCallback } from 'react';
import ABMTemplate from '../../../core/components/templates/ABMTemplate';
import useDialog from '../../../../../core/contexts/DialogContext/useDialog';
import AddIntroDialog from '../../components/contents/dialogs/AddIntroDialog';
import useGetIntrosService from '../../services/intros/useGetIntrosService';
import useService from '../../../core/hooks/useService';
import IntroCard from '../../components/contents/cards/IntroCard';

function IntrosPage() {
  const { openDialog } = useDialog();
  const { getIntros } = useGetIntrosService();
  const { value: intros, refresh } = useService(getIntros, null, []);

  const handleClickAdd = useCallback(() => {
    openDialog(AddIntroDialog, { onAdd: refresh });
  }, [openDialog, refresh]);

  return (
    <ABMTemplate onClickAdd={handleClickAdd} onClickDeleteAll={() => {}}>
      {intros.map((intro, index) => (
        <IntroCard
          intro={intro}
          key={index}
          onEdit={refresh}
          onDelete={refresh}
        ></IntroCard>
      ))}
    </ABMTemplate>
  );
}

export default IntrosPage;
