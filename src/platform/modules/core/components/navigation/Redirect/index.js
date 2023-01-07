import PropTypes from 'prop-types';
import { useEffect } from 'react';

import useNavigate from '../../../hooks/useNavigate';
/**
 * Component to redirect pages
 */
function Redirect({ path }) {
  const { go } = useNavigate();
  useEffect(() => {
    go(path);
  }, [path, go]);
  return null;
}

Redirect.propTypes = {
  path: PropTypes.string,
};

export default Redirect;
