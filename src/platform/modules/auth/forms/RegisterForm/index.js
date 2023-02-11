import Form from '../../../../../core/components/inputs/Form';
import ControllerInput from '../../../../../core/components/inputs/Form/controllers/ControllerInput';
import TextInput from '../../../../../core/components/inputs/TextInput';
import PasswordInput from '../../../../../core/components/inputs/PasswordInput';
import useLocale from '../../../../../core/contexts/LocaleContext/useLocale';
import AUTH_TEXTS from '../../constants/texts';
import useValidator from '../../../core/hooks/useValidator';
function RegisterForm({ onSubmit, submitDisabled }) {
  const { translate } = useLocale();
  const validator = useValidator();
  const schema = validator.form({
    email: validator.email(),
    password: validator.password(),
    repeatPassword: validator.equalTo('password'),
  });

  return (
    <Form
      schema={schema}
      onSubmit={onSubmit}
      templateProps={{
        submitButtonProps: {
          children: translate(AUTH_TEXTS.REGISTER_FORM_SUBMIT),
          disabled: submitDisabled,
        },
      }}
    >
      <ControllerInput
        render={TextInput}
        name="email"
        label={translate(AUTH_TEXTS.FORM_EMAIL_LABEL)}
        placeholder={translate(AUTH_TEXTS.FORM_EMAIL_PLACEHOLDER)}
        defaultValue=""
      ></ControllerInput>
      <ControllerInput
        render={PasswordInput}
        name="password"
        label={translate(AUTH_TEXTS.FORM_PASSWORD_LABEL)}
        placeholder={translate(AUTH_TEXTS.FORM_PASSWORD_PLACEHOLDER)}
        defaultValue=""
      ></ControllerInput>
      <ControllerInput
        render={PasswordInput}
        name="repeatPassword"
        label={translate(AUTH_TEXTS.FORM_REPEAT_PASSWORD_LABEL)}
        placeholder={translate(AUTH_TEXTS.FORM_REPEAT_PASSWORD_PLACEHOLDER)}
        defaultValue=""
      ></ControllerInput>
    </Form>
  );
}

export default RegisterForm;
