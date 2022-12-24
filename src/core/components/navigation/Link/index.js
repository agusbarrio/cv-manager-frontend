import LinkMaterial from '@mui/material/Link';
import PropTypes from 'prop-types';
/**
 * Link Component
 * @param {*} param0
 * @returns
 */
function Link({ children, color, ...props }) {
  return (
    <LinkMaterial color={color} {...props}>
      {children}
    </LinkMaterial>
  );
}

Link.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
};
export default Link;
