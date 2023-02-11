import ControllerInput from '../../../../../../../core/components/inputs/Form/controllers/ControllerInput';
import TextInput from '../../../../../../../core/components/inputs/TextInput';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import useValidator from '../../../../../core/hooks/useValidator';
import Form from '../../../../../../../core/components/inputs/Form';
import DateInput from '../../../../../../../core/components/inputs/DateInput';
import SelectInput from '../../../../../../../core/components/inputs/SelectInput';
import _ from 'lodash';
import { EMPLOYMENT_TYPES } from '../../../../constants/experiences';
import { useMemo } from 'react';
function ExperienceForm({ innerRef, defaultValues }) {
  const { translate } = useLocale();
  const validator = useValidator();
  const schema = validator.form({
    title: validator.title(),
    companyName: validator.name(),
    location: validator.title({ required: { value: false } }),
    startDate: validator.date({ required: { value: true } }),
    endDate: validator.date(),
    industry: validator.title({ required: { value: false } }),
    description: validator.description({ required: { value: false } }),
    employmentType: validator
      .oneOf([..._.values(EMPLOYMENT_TYPES), null])
      .transform((value) => (value === '' ? null : value)),
  });

  const employmentTypesList = useMemo(() => {
    const list = _.map(_.values(EMPLOYMENT_TYPES), (employmentType) => ({
      value: employmentType,
      children: translate(
        DASHBOARD_TEXTS[`EXPERIENCE_EMPLOYMENT_TYPE_${employmentType}_LABEL`]
      ),
    }));

    return [
      {
        value: '',
        children: translate(DASHBOARD_TEXTS.FORM_EMPLOYMENT_TYPE_PLACEHOLDER),
      },
      ...list,
    ];
  }, [translate]);

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
        label={translate(DASHBOARD_TEXTS.EXPERIENCE_TITLE_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.FORM_TITLE_PLACEHOLDER)}
        multiline
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="companyName"
        label={translate(DASHBOARD_TEXTS.EXPERIENCE_COMPANY_NAME_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.FORM_COMPANY_NAME_PLACEHOLDER)}
        multiline
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="location"
        label={translate(DASHBOARD_TEXTS.EXPERIENCE_LOCATION_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.FORM_LOCATION_PLACEHOLDER)}
        multiline
      ></ControllerInput>
      <ControllerInput
        render={DateInput}
        name="startDate"
        label={translate(DASHBOARD_TEXTS.EXPERIENCE_START_DATE_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.FORM_START_DATE_PLACEHOLDER)}
        defaultValue={null}
      ></ControllerInput>
      <ControllerInput
        render={DateInput}
        name="endDate"
        label={translate(DASHBOARD_TEXTS.EXPERIENCE_END_DATE_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.FORM_END_DATE_PLACEHOLDER)}
        defaultValue={null}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="industry"
        label={translate(DASHBOARD_TEXTS.EXPERIENCE_INDUSTRY_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.FORM_INDUSTRY_PLACEHOLDER)}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="description"
        label={translate(DASHBOARD_TEXTS.EXPERIENCE_DESCRIPTION_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.FORM_DESCRIPTION_PLACEHOLDER)}
      ></ControllerInput>
      <ControllerInput
        render={SelectInput}
        name="employmentType"
        displayEmpty
        label={translate(DASHBOARD_TEXTS.EXPERIENCE_EMPLOYMENT_TYPE_LABEL)}
        list={employmentTypesList}
      ></ControllerInput>
    </Form>
  );
}

export default ExperienceForm;
