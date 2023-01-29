import React, { useCallback } from 'react';
import ABMTemplate from '../../../core/components/templates/ABMTemplate';
import useDialog from '../../../../../core/contexts/DialogContext/useDialog';
import AddIntroDialog from '../../components/contents/dialogs/AddIntroDialog';
import { Stack } from '@mui/material';
import useGetIntrosService from '../../services/intros/useGetIntrosService';
import useService from '../../../core/hooks/useService';
import IntroCard from '../../components/contents/cards/IntroCard';

function IntrosPage() {
  const { openDialog } = useDialog();
  const { getIntros } = useGetIntrosService();
  const { value: intros } = useService(getIntros, null, []);

  const handleClickAdd = useCallback(() => {
    openDialog(AddIntroDialog);
  }, [openDialog]);

  return (
    <ABMTemplate onClickAdd={handleClickAdd} onClickDeleteAll={() => {}}>
      <Stack gap={2} direction="row" flexWrap="wrap">
        {intros.map((intro) => (
          <IntroCard intro={intro}></IntroCard>
        ))}
      </Stack>
    </ABMTemplate>
  );
}

export default IntrosPage;
