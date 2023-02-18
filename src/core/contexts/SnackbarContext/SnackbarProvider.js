import { SnackbarProvider as SnackbarProviderNotistack } from 'notistack';
import PropTypes from 'prop-types';

function SnackbarProvider({
  maxSnack: maxSnackProps = 3,
  anchorOrigin: anchorOriginProps = { horizontal: 'left', vertical: ' bottom' },
  children,
}) {
  return (
    <SnackbarProviderNotistack
      maxSnack={maxSnackProps}
      anchorOrigin={anchorOriginProps}
    >
      {children}
    </SnackbarProviderNotistack>
  );
}

SnackbarProvider.propTypes = {
  maxSnack: PropTypes.number,
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
    vertical: PropTypes.oneOf(['top', 'bottom']),
  }),
  children: PropTypes.node,
};

export default SnackbarProvider;
