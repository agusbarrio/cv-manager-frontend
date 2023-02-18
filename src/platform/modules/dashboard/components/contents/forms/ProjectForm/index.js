import ControllerInput from '../../../../../../../core/components/inputs/Form/controllers/ControllerInput';
import TextInput from '../../../../../../../core/components/inputs/TextInput';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import useValidator from '../../../../../core/hooks/useValidator';
import Form from '../../../../../../../core/components/inputs/Form';
import DateInput from '../../../../../../../core/components/inputs/DateInput';

function ProjectForm({ innerRef, defaultValues }) {
  const { translate } = useLocale();
  const validator = useValidator();
  const schema = validator.form({
    name: validator.name(),
    description: validator.description({ required: { value: true } }),
    startDate: validator.date({ required: { value: true } }),
    endDate: validator.date(),
    url: validator.url(),
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
        label={translate(DASHBOARD_TEXTS.PROJECT_NAME_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.PROJECT_FORM_NAME_PLACEHOLDER)}
        multiline
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="description"
        label={translate(DASHBOARD_TEXTS.PROJECT_DESCRIPTION_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.PROJECT_FORM_DESCRIPTION_PLACEHOLDER
        )}
        multiline
      ></ControllerInput>
      <ControllerInput
        render={DateInput}
        name="startDate"
        label={translate(DASHBOARD_TEXTS.PROJECT_START_DATE_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.PROJECT_FORM_START_DATE_PLACEHOLDER
        )}
        defaultValue={null}
      ></ControllerInput>
      <ControllerInput
        render={DateInput}
        name="endDate"
        label={translate(DASHBOARD_TEXTS.PROJECT_END_DATE_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.PROJECT_FORM_END_DATE_PLACEHOLDER
        )}
        defaultValue={null}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="url"
        label={translate(DASHBOARD_TEXTS.PROJECT_URL_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.PROJECT_FORM_URL_PLACEHOLDER)}
      ></ControllerInput>
    </Form>
  );
}

export default ProjectForm;
