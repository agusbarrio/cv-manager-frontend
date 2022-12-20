import PropTypes from 'prop-types';
import { FormHelperText } from '@mui/material';

function FormHelperError({ helperText = null, errorMessage = null }) {
  return (
    <>
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
      {helperText && !errorMessage && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
    </>
  );
}

FormHelperError.propTypes = {
  errorMessage: PropTypes.string,
  helperText: PropTypes.string,
};

export default FormHelperError;
