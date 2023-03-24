import ControllerInput from '../../../../../../../core/components/inputs/Form/controllers/ControllerInput';
import TextInput from '../../../../../../../core/components/inputs/TextInput';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import useValidator from '../../../../../core/hooks/useValidator';
import Form from '../../../../../../../core/components/inputs/Form';
import DateInput from '../../../../../../../core/components/inputs/DateInput';
import SkillsSelectInput from '../../../../components/inputs/SkillsSelectInput';

function EducationForm({ innerRef, defaultValues }) {
  const { translate } = useLocale();
  const validator = useValidator();
  const schema = validator.form({
    school: validator.text({ required: { value: true } }),
    degree: validator.text(),
    fieldOfStudy: validator.text(),
    startDate: validator.date(),
    endDate: validator.date(),
    grade: validator.text(),
    activities: validator.description(),
    description: validator.description(),
    skillsIds: validator.ids(),
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
        name="school"
        label={translate(DASHBOARD_TEXTS.EDUCATION_SCHOOL_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.EDUCATION_FORM_SCHOOL_PLACEHOLDER
        )}
        multiline
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="degree"
        label={translate(DASHBOARD_TEXTS.EDUCATION_DEGREE_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.EDUCATION_FORM_DEGREE_PLACEHOLDER
        )}
        multiline
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="fieldOfStudy"
        label={translate(DASHBOARD_TEXTS.EDUCATION_FIELD_OF_STUDY_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.EDUCATION_FORM_FIELD_OF_STUDY_PLACEHOLDER
        )}
        multiline
      ></ControllerInput>
      <ControllerInput
        render={DateInput}
        name="startDate"
        label={translate(DASHBOARD_TEXTS.EDUCATION_START_DATE_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.EDUCATION_FORM_START_DATE_PLACEHOLDER
        )}
        defaultValue={null}
      ></ControllerInput>
      <ControllerInput
        render={DateInput}
        name="endDate"
        label={translate(DASHBOARD_TEXTS.EDUCATION_END_DATE_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.EDUCATION_FORM_END_DATE_PLACEHOLDER
        )}
        defaultValue={null}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="grade"
        label={translate(DASHBOARD_TEXTS.EDUCATION_GRADE_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.EDUCATION_FORM_GRADE_PLACEHOLDER
        )}
        multiline
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="activities"
        label={translate(DASHBOARD_TEXTS.EDUCATION_ACTIVITIES_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.EDUCATION_FORM_ACTIVITIES_PLACEHOLDER
        )}
        multiline
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="description"
        label={translate(DASHBOARD_TEXTS.EDUCATION_DESCRIPTION_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.EDUCATION_FORM_DESCRIPTION_PLACEHOLDER
        )}
        multiline
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
        label={translate(DASHBOARD_TEXTS.EDUCATION_IMG_SRC_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.EDUCATION_FORM_IMG_SRC_PLACEHOLDER
        )}
      ></ControllerInput>
    </Form>
  );
}

export default EducationForm;
