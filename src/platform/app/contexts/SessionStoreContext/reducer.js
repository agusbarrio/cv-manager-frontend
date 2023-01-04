import localStorageUtils from '../../../../core/utils/localStorage';
import dateUtils from '../../../../core/utils/date';
import { ACTIONS, STATE_NAME } from './constants';

const getLoginAction = () => {
  const newState = {
    logged: true,
    lastUpdate: dateUtils.getNow(),
  };
  localStorageUtils.set(STATE_NAME, newState);
  return newState;
};

const getLogoutAction = () => {
  const newState = {
    logged: false,
    lastUpdate: null,
  };
  localStorageUtils.set(STATE_NAME, newState);
  return newState;
};

const getUpdateSessionAction = (session) => {
  const newState = {
    ...session,
    lastUpdate: dateUtils.getNow(),
  };
  localStorageUtils.set(STATE_NAME, newState);
  return newState;
};

function reducer(session, action) {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return getLoginAction();
    case ACTIONS.LOGOUT:
      return getLogoutAction();
    case ACTIONS.UPDATE_SESSION:
      return getUpdateSessionAction();
    default:
      return { ...session };
  }
}

export default reducer;
