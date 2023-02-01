import ControllerInput from '../../../../../../../core/components/inputs/Form/controllers/ControllerInput';
import TextInput from '../../../../../../../core/components/inputs/TextInput';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import useValidator from '../../../../../core/hooks/useValidator';
import Form from '../../../../../../../core/components/inputs/Form';
import DateInput from '../../../../../../../core/components/inputs/DateInput';

function IntroForm({ innerRef }) {
  const { translate } = useLocale();
  const validator = useValidator();
  const schema = validator.form({
    firstName: validator.name(),
    lastName: validator.name(),
    headLine: validator.title(),
    birthday: validator.date({ nullable: { value: true } }),
    about: validator.description(),
  });

  return (
    <Form
      schema={schema}
      innerRef={innerRef}
      templateProps={{ showSubmitButton: false }}
    >
      <ControllerInput
        render={TextInput}
        name="firstName"
        label={translate(DASHBOARD_TEXTS.INTRO_FIRST_NAME_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.FORM_FIRST_NAME_PLACEHOLDER)}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="lastName"
        label={translate(DASHBOARD_TEXTS.INTRO_LAST_NAME_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.FORM_LAST_NAME_PLACEHOLDER)}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="headLine"
        label={translate(DASHBOARD_TEXTS.INTRO_HEAD_LINE_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.FORM_HEAD_LINE_PLACEHOLDER)}
      ></ControllerInput>
      <ControllerInput
        render={DateInput}
        name="birthday"
        label={translate(DASHBOARD_TEXTS.INTRO_BIRTHDAY_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.FORM_BIRTHDARY_PLACEHOLDER)}
        defaultValue={null}
      ></ControllerInput>
    </Form>
  );
}

export default IntroForm;
