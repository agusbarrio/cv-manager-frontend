import Form from '../../../../../core/components/inputs/Form';
import { object, string, ref } from 'yup';
import ControllerInput from '../../../../../core/components/inputs/Form/controllers/ControllerInput';
import TextInput from '../../../../../core/components/inputs/TextInput';
import PasswordInput from '../../../../../core/components/inputs/PasswordInput';

function RegisterForm({ onSubmit }) {
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
        label="Email"
        placeholder="Enter your email"
        defaultValue=""
      ></ControllerInput>
      <ControllerInput
        render={PasswordInput}
        name="password"
        label="Password"
        placeholder="Enter your password"
        defaultValue=""
      ></ControllerInput>
      <ControllerInput
        render={PasswordInput}
        name="repeatPassword"
        label="Repeat password"
        placeholder="Repeat your password"
        defaultValue=""
      ></ControllerInput>
    </Form>
  );
}

export default RegisterForm;
