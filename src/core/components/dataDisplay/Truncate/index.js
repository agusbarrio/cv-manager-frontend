import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

/**
 * Component to trunc texts
 */
function Truncate({
  line = 1,
  children = '',
  component = Typography,
  ...props
}) {
  return (
    <Box
      component={component}
      {...props}
      sx={{
        display: '-webkit-box',
        WebkitLineClamp: line,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        overflowWrap: 'break-word',
        ...props.sx,
      }}
    >
      {children}
    </Box>
  );
}

Truncate.propTypes = {
  line: PropTypes.number,
  children: PropTypes.any,
  maxCharacters: PropTypes.number,
};

export default Truncate;
