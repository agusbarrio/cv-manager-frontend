import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';
import Icon from '../../dataDisplay/Icon';
import IconButton from '@mui/material/IconButton';

/**
 * Material Button Icon
 * @param {*} param0
 * @returns
 */
function ButtonIcon({ tooltip, placement, children, iconProps, ...props }) {
  const btnChildren = (
    <IconButton {...props}>
      <Icon {...iconProps}>{children}</Icon>
    </IconButton>
  );
  return (
    <>
      {tooltip ? (
        <Tooltip title={tooltip} placement={placement}>
          {btnChildren}
        </Tooltip>
      ) : (
        btnChildren
      )}
    </>
  );
}

ButtonIcon.propTypes = {
  tooltip: PropTypes.any,
  placement: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
  icon: PropTypes.string,
  iconProps: PropTypes.object,
};

export default ButtonIcon;
