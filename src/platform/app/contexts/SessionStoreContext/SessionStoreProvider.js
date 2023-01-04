import { createContext, useReducer } from 'react';
import localStorageUtils from '../../../../core/utils/localStorage';
import { ACTIONS, STATE_NAME } from './constants';
import { useCallback } from 'react';
import reducer from './reducer';

export const SessionStoreContext = createContext();

function SessionStoreProvider({ children }) {
  const [session, dispatch] = useReducer(
    reducer,
    localStorageUtils.get(STATE_NAME) || { logged: false, lastUpdate: null }
  );

  const login = useCallback(() => {
    dispatch({ type: ACTIONS.LOGIN });
  }, []);

  const logout = useCallback(() => {
    dispatch({ type: ACTIONS.LOGOUT });
  }, []);

  const updateSession = useCallback(() => {
    dispatch({ type: ACTIONS.UPDATE_SESSION });
  }, []);

  return (
    <SessionStoreContext.Provider
      value={{ session, login, logout, updateSession }}
    >
      {children}
    </SessionStoreContext.Provider>
  );
}

export default SessionStoreProvider;
