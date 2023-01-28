import { yupResolver } from '@hookform/resolvers/yup';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { FormProvider, useForm } from 'react-hook-form';
import './index.css';

import DefaultFormTemplate from '../../templates/DefaultFormTemplate';
import DevToolForm from './DevToolForm';
import { useImperativeHandle } from 'react';

function Form({
  template: Template = DefaultFormTemplate,
  templateProps = {},
  children,
  defaultValues = {},
  onSubmit = () => {},
  schema,
  config,
  innerRef,
}) {
  const methods = useForm({
    defaultValues: { ...defaultValues },
    resolver: schema ? yupResolver(schema) : null,
    mode: _.get(config, 'mode', 'onSubmit'),
    criteriaMode: _.get(config, 'criteriaMode', 'firstErrorDetected'),
    reValidateMode: _.get(config, 'reValidateMode', 'onChange'),
    shouldUnregister: _.get(config, 'shouldUnregister', true),
    shouldFocusError: _.get(config, 'shouldFocusError', true),
    context: _.get(config, 'context', {}),
    ..._.get(config, 'options', {}),
  });

  useImperativeHandle(
    innerRef,
    () => ({
      ...methods,
    }),
    [methods]
  );

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods?.handleSubmit(onSubmit)}
        noValidate
        className="Form"
      >
        <Template {...templateProps}>{children}</Template>
        <DevToolForm></DevToolForm>
      </form>
    </FormProvider>
  );
}

Form.propTypes = {
  template: PropTypes.func,
  templateProps: PropTypes.object,
  children: PropTypes.node,
  defaultValues: PropTypes.object,
  onSubmit: PropTypes.func,
  schema: PropTypes.object,
  config: PropTypes.object,
  innerRef: PropTypes.any,
};

export default Form;
