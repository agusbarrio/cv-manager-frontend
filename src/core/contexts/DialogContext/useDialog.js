import { useContext } from 'react';
import { DialogContext } from './DialogProvider';

function useDialog() {
  const { openDialog, closeDialog } = useContext(DialogContext);
  return { openDialog, closeDialog };
}

export default useDialog;
