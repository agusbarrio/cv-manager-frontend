import { Grid } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import _ from 'lodash';
import PropTypes from 'prop-types';
function ControllerInput({
  name,
  render: Input,
  template: Template = Grid,
  templateProps = { item: true, container: true, xs: 12 },
  disabled,
  defaultValue,
  ...props
}) {
  const { control, formState } = useFormContext();
  const { isSubmitting } = formState;
  return (
    <Template {...templateProps}>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            errorMessage={_.get(fieldState, 'error.message', null)}
            disabled={disabled || isSubmitting}
            ref={null}
            {...props}
          ></Input>
        )}
      ></Controller>
    </Template>
  );
}

ControllerInput.propTypes = {
  name: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  template: PropTypes.func,
  templateProps: PropTypes.object,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string.isRequired,
};

export default ControllerInput;
