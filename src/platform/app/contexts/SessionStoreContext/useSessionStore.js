import { useContext } from 'react';
import { SessionStoreContext } from './SessionStoreProvider';

function useSessionStore() {
  const contextValues = useContext(SessionStoreContext);
  return contextValues;
}

export default useSessionStore;
