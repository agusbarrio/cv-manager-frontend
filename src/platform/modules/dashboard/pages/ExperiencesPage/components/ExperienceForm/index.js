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
import SkillsSelectInput from '../../../../components/inputs/SkillsSelectInput';
function ExperienceForm({ innerRef, defaultValues }) {
  const { translate } = useLocale();
  const validator = useValidator();
  const schema = validator.form({
    title: validator.text({ required: { value: true } }),
    companyName: validator.text(),
    location: validator.text(),
    startDate: validator.date(),
    endDate: validator.date(),
    industry: validator.text(),
    description: validator.description(),
    employmentType: validator
      .oneOf([..._.values(EMPLOYMENT_TYPES), null])
      .transform((value) => (!value ? null : value)),
    skillsIds: validator.ids(),
    imgSrc: validator.url(),
  });

  const employmentTypesList = useMemo(() => {
    return _.map(_.values(EMPLOYMENT_TYPES), (employmentType) => ({
      value: employmentType,
      children: translate(
        DASHBOARD_TEXTS[`EXPERIENCE_EMPLOYMENT_TYPE_${employmentType}_LABEL`]
      ),
    }));
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
        placeholder={translate(
          DASHBOARD_TEXTS.EXPERIENCE_FORM_TITLE_PLACEHOLDER
        )}
        multiline
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="companyName"
        label={translate(DASHBOARD_TEXTS.EXPERIENCE_COMPANY_NAME_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.EXPERIENCE_FORM_COMPANY_NAME_PLACEHOLDER
        )}
        multiline
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="location"
        label={translate(DASHBOARD_TEXTS.EXPERIENCE_LOCATION_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.EXPERIENCE_FORM_LOCATION_PLACEHOLDER
        )}
        multiline
      ></ControllerInput>
      <ControllerInput
        render={DateInput}
        name="startDate"
        label={translate(DASHBOARD_TEXTS.EXPERIENCE_START_DATE_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.EXPERIENCE_FORM_START_DATE_PLACEHOLDER
        )}
        defaultValue={null}
      ></ControllerInput>
      <ControllerInput
        render={DateInput}
        name="endDate"
        label={translate(DASHBOARD_TEXTS.EXPERIENCE_END_DATE_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.EXPERIENCE_FORM_END_DATE_PLACEHOLDER
        )}
        defaultValue={null}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="industry"
        label={translate(DASHBOARD_TEXTS.EXPERIENCE_INDUSTRY_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.EXPERIENCE_FORM_INDUSTRY_PLACEHOLDER
        )}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="description"
        label={translate(DASHBOARD_TEXTS.EXPERIENCE_DESCRIPTION_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.EXPERIENCE_FORM_DESCRIPTION_PLACEHOLDER
        )}
      ></ControllerInput>
      <ControllerInput
        render={SelectInput}
        name="employmentType"
        displayEmpty
        placeholder={translate(
          DASHBOARD_TEXTS.EXPERIENCE_FORM_EMPLOYMENT_TYPE_PLACEHOLDER
        )}
        label={translate(DASHBOARD_TEXTS.EXPERIENCE_EMPLOYMENT_TYPE_LABEL)}
        list={employmentTypesList}
      ></ControllerInput>
      <ControllerInput
        render={SkillsSelectInput}
        name="skillsIds"
        multiple
        defaultValue={[]}
        label={translate(DASHBOARD_TEXTS.SKILLS_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.FORM_SKILLS_PLACEHOLDER)}
        placeholderProps={{ disabled: true }}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="imgSrc"
        label={translate(DASHBOARD_TEXTS.EXPERIENCE_IMG_SRC_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.EXPERIENCE_FORM_IMG_SRC_PLACEHOLDER
        )}
      ></ControllerInput>
    </Form>
  );
}

export default ExperienceForm;
