import { FormControl, FormLabel, Select, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import FormHelperError from '../Form/FormHelperError';

/**
 * Compontente que hace los TextInputs
 * @param {*} param0
 * @returns
 */
function SelectInput({
  children,
  variant = 'outlined',
  errorMessage,
  label,
  helperText = null,
  inputProps = {},
  sx,
  list = [],
  ...props
}) {
  return (
    <FormControl sx={{ width: '100%', ...sx }} error={!!errorMessage}>
      <FormLabel>{label}</FormLabel>
      <Select
        variant={variant}
        inputProps={inputProps}
        error={!!errorMessage}
        {...props}
      >
        {list.map((item, index) => (
          <MenuItem {...item} value={item.value} key={index}>
            {item.children}
          </MenuItem>
        ))}
      </Select>
      <FormHelperError errorMessage={errorMessage} helperText={helperText} />
    </FormControl>
  );
}
SelectInput.propTypes = {
  children: PropTypes.node,
  errorMessage: PropTypes.string,
  helperText: PropTypes.string,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  inputProps: PropTypes.object,
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
  sx: PropTypes.object,
};

export default SelectInput;
