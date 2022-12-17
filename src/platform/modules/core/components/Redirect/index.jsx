import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
/**
 * Componente To redirect pages
 */
function Redirect({ path }) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(path);
  }, [path, navigate]);
  return null;
}

Redirect.propTypes = {
  path: PropTypes.string,
};

export default Redirect;
