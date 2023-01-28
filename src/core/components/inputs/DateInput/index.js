import PropTypes from 'prop-types';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl, FormLabel, TextField } from '@mui/material';
import FormHelperError from '../Form/FormHelperError';
import useLocale from '../../../contexts/LocaleContext/useLocale';

/**
 * Material Button Icon
 * @param {*} param0
 * @returns
 */
function DateInput({
  children,
  variant = 'outlined',
  errorMessage,
  label,
  helperText = null,
  inputProps = {},
  sx,
  ...props
}) {
  const { dateFormat } = useLocale();
  return (
    <FormControl sx={{ width: '100%', ...sx }} error={!!errorMessage}>
      <FormLabel>{label}</FormLabel>
      <DatePicker
        disableOpenPicker
        inputFormat={dateFormat}
        renderInput={(params) => {
          return (
            <TextField
              variant={variant}
              inputProps={inputProps}
              {...params}
              error={!!errorMessage}
            />
          );
        }}
        {...props}
      />

      <FormHelperError errorMessage={errorMessage} helperText={helperText} />
    </FormControl>
  );
}

DateInput.propTypes = {
  tooltip: PropTypes.any,
  placement: PropTypes.oneOf(['bottom', 'top', 'left', 'right']),
  icon: PropTypes.string,
  iconProps: PropTypes.object,
};

export default DateInput;
