import ControllerInput from '../../../../../../../core/components/inputs/Form/controllers/ControllerInput';
import TextInput from '../../../../../../../core/components/inputs/TextInput';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import useValidator from '../../../../../core/hooks/useValidator';
import Form from '../../../../../../../core/components/inputs/Form';
import ResumesSelectInput from '../../../../components/inputs/ResumesSelectInput';

function ApikeyForm({ innerRef, defaultValues }) {
  const { translate } = useLocale();
  const validator = useValidator();
  const schema = validator.form({
    title: validator.title(),
    resumeId: validator.id(),
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
        name="title"
        label={translate(DASHBOARD_TEXTS.APIKEY_TITLE_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.APIKEY_FORM_TITLE_PLACEHOLDER)}
        multiline
      ></ControllerInput>
      <ControllerInput
        render={ResumesSelectInput}
        name="resumeId"
        label={translate(DASHBOARD_TEXTS.APIKEY_RESUME_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.APIKEY_FORM_RESUME_PLACEHOLDER)}
        placeholderProps={{ disabled: true }}
      ></ControllerInput>
    </Form>
  );
}

export default ApikeyForm;
