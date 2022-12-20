import Form from '../../../../../core/components/inputs/Form';
import { object, string, ref } from 'yup';
import ControllerInput from '../../../../../core/components/inputs/Form/controllers/ControllerInput';
import TextInput from '../../../../../core/components/inputs/TextInput';
import PasswordInput from '../../../../../core/components/inputs/PasswordInput';
import useLocale from '../../../../../core/contexts/LocaleContext/useLocale';
import AUTH_TEXTS from '../../constants/texts';
function RegisterForm({ onSubmit }) {
  const { translate } = useLocale();
  let schema = object({
    email: string().email().required(),
    password: string().required(),
    repeatPassword: string()
      .required()
      .oneOf([ref('password')]),
  });
  return (
    <Form schema={schema} onSubmit={onSubmit}>
      <ControllerInput
        render={TextInput}
        name="email"
        label={translate(AUTH_TEXTS.REGISTER_FORM_EMAIL_LABEL)}
        placeholder={translate(AUTH_TEXTS.REGISTER_FORM_EMAIL_PLACEHOLDER)}
        defaultValue=""
      ></ControllerInput>
      <ControllerInput
        render={PasswordInput}
        name="password"
        label={translate(AUTH_TEXTS.REGISTER_FORM_PASSWORD_LABEL)}
        placeholder={translate(AUTH_TEXTS.REGISTER_FORM_PASSWORD_PLACEHOLDER)}
        defaultValue=""
      ></ControllerInput>
      <ControllerInput
        render={PasswordInput}
        name="repeatPassword"
        label={translate(AUTH_TEXTS.REGISTER_FORM_REPEAT_PASSWORD_LABEL)}
        placeholder={translate(
          AUTH_TEXTS.REGISTER_FORM_REPEAT_PASSWORD_PLACEHOLDER
        )}
        defaultValue=""
      ></ControllerInput>
    </Form>
  );
}

export default RegisterForm;
