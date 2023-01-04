import AccessManager from '../managers/AccessManager';

const utils = {
  manageAccess: (props = {}) => ({
    access: {
      render: AccessManager,
      renderProps: { ...props },
    },
  }),
};

export default utils;
