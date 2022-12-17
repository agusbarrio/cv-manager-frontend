import AccessManager from '../managers/AccessManager';

const utils = {
  setAccess: () => ({
    access: {
      render: AccessManager,
      renderProps: {},
    },
  }),
};

export default utils;
