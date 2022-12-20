import { Icon as MaterialIcon } from '@mui/material';
import PropTypes from 'prop-types';
function Icon({
  children,
  size = '2rem',
  variant = 'outlined',
  color,
  sx = {},
  ...props
}) {
  return (
    <MaterialIcon
      className={`material-icons-${variant}`}
      sx={{ fontSize: size, color, ...sx }}
      {...props}
    >
      {children}
    </MaterialIcon>
  );
}

Icon.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  sx: PropTypes.object,
  variant: PropTypes.oneOf([
    'filled',
    'outlined',
    'rounded',
    'sharp',
    'twoTone',
  ]),
};

export default Icon;
