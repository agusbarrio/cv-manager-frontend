import React from 'react';
import PropTypes from 'prop-types';

function ProtectedRoute({
  children,
  render: ProtectComponent = React.Fragment,
  renderProps = {},
  route,
}) {
  return (
    <ProtectComponent route={route} {...renderProps}>
      {children}
    </ProtectComponent>
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  render: PropTypes.func,
  renderProps: PropTypes.object,
};

export default ProtectedRoute;
