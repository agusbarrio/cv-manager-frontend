import { FormControl, FormLabel, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import FormHelperError from '../Form/FormHelperError';
/**
 * Compontente que hace los TextInputs
 * @param {*} param0
 * @returns
 */
function TextInput({
  children,
  variant = 'outlined',
  errorMessage,
  label,
  helperText = null,
  startAdornment: _startAdornment,
  endAdornment: _endAdornment,
  inputProps = {},
  sx,
  ...props
}) {
  const startAdornment = useMemo(
    () =>
      _startAdornment ? (
        <InputAdornment position="start">{_startAdornment}</InputAdornment>
      ) : null,
    [_startAdornment]
  );
  const endAdornment = useMemo(
    () =>
      _endAdornment ? (
        <InputAdornment position="end">{_endAdornment}</InputAdornment>
      ) : null,
    [_endAdornment]
  );

  return (
    <FormControl sx={{ width: '100%', ...sx }} error={!!errorMessage}>
      <FormLabel>{label}</FormLabel>
      <TextField
        variant={variant}
        inputProps={inputProps}
        error={!!errorMessage}
        InputProps={{
          startAdornment,
          endAdornment,
        }}
        {...props}
      />
      <FormHelperError errorMessage={errorMessage} helperText={helperText} />
    </FormControl>
  );
}
TextInput.propTypes = {
  children: PropTypes.node,
  errorMessage: PropTypes.string,
  helperText: PropTypes.string,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  inputProps: PropTypes.object,
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
  sx: PropTypes.object,
};

export default TextInput;
