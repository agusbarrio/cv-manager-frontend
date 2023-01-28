import { createContext, useCallback, useState } from 'react';

export const DialogContext = createContext();

function DialogProvider({ children }) {
  const [dialogComponent, setDialogComponent] = useState(null);

  const openDialog = useCallback((Component, props) => {
    setDialogComponent(<Component open={true} {...props}></Component>);
  }, []);

  const closeDialog = useCallback(() => {
    setDialogComponent(null);
  }, []);

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog }}>
      {dialogComponent}
      {children}
    </DialogContext.Provider>
  );
}

export default DialogProvider;
