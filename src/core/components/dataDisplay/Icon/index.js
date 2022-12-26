import { Icon as MaterialIcon } from '@mui/material';
import PropTypes from 'prop-types';
function Icon({
  children,
  size,
  variant = 'outlined',
  color,
  sx = {},
  ...props
}) {
  return (
    <MaterialIcon
      className={`material-icons-${variant}`}
      color={color}
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
