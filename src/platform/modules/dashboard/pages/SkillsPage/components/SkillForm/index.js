import ControllerInput from '../../../../../../../core/components/inputs/Form/controllers/ControllerInput';
import TextInput from '../../../../../../../core/components/inputs/TextInput';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import useValidator from '../../../../../core/hooks/useValidator';
import Form from '../../../../../../../core/components/inputs/Form';

function SkillForm({ innerRef, defaultValues }) {
  const { translate } = useLocale();
  const validator = useValidator();
  const schema = validator.form({
    name: validator.text({ required: { value: true } }),
    imgSrc: validator.url(),
  });

  return (
    <Form
      schema={schema}
      innerRef={innerRef}
      templateProps={{ showSubmitButton: false }}
      defaultValues={defaultValues}
    >
      <ControllerInput
        render={TextInput}
        name="name"
        label={translate(DASHBOARD_TEXTS.SKILL_NAME_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.SKILL_FORM_NAME_PLACEHOLDER)}
        multiline
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="imgSrc"
        label={translate(DASHBOARD_TEXTS.SKILL_IMG_SRC_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.SKILL_FORM_IMG_SRC_PLACEHOLDER)}
      ></ControllerInput>
    </Form>
  );
}

export default SkillForm;
