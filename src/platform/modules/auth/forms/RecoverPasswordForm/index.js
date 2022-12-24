import Form from '../../../../../core/components/inputs/Form';
import ControllerInput from '../../../../../core/components/inputs/Form/controllers/ControllerInput';
import TextInput from '../../../../../core/components/inputs/TextInput';
import useLocale from '../../../../../core/contexts/LocaleContext/useLocale';
import AUTH_TEXTS from '../../constants/texts';
import useValidator from '../../../core/hooks/useValidator';

function RecoverPasswordForm({ onSubmit }) {
  const { translate } = useLocale();
  const validator = useValidator();
  const schema = validator.form({
    email: validator.email(),
  });

  return (
    <Form
      schema={schema}
      onSubmit={onSubmit}
      templateProps={{
        submitButtonProps: {
          children: translate(AUTH_TEXTS.RECOVER_PASSWORD_FORM_SUBMIT),
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
    </Form>
  );
}

export default RecoverPasswordForm;
