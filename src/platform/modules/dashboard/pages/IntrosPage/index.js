import React, { useCallback } from 'react';
import ABMTemplate from '../../../core/components/templates/ABMTemplate';
import useDialog from '../../../../../core/contexts/DialogContext/useDialog';
import AddIntroDialog from '../../components/contents/dialogs/AddIntroDialog';

function IntrosPage() {
  const { openDialog } = useDialog();
  const handleClickAdd = useCallback(() => {
    openDialog(AddIntroDialog);
  }, [openDialog]);
  return (
    <ABMTemplate
      onClickAdd={handleClickAdd}
      onClickDeleteAll={() => {}}
    ></ABMTemplate>
  );
}

export default IntrosPage;
