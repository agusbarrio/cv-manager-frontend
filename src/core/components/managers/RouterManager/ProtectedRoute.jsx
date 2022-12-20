import React from 'react';
import PropTypes from 'prop-types';

function ProtectedRoute({
  children,
  render: ProtectComponent = React.Fragment,
  renderProps = {},
}) {
  return <ProtectComponent {...renderProps}>{children}</ProtectComponent>;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node,
  render: PropTypes.func,
  renderProps: PropTypes.object,
};

export default ProtectedRoute;
