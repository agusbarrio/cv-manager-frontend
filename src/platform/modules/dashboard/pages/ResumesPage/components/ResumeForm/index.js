import ControllerInput from '../../../../../../../core/components/inputs/Form/controllers/ControllerInput';
import TextInput from '../../../../../../../core/components/inputs/TextInput';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import useValidator from '../../../../../core/hooks/useValidator';
import Form from '../../../../../../../core/components/inputs/Form';
import ContactsSelectInput from '../../../../components/inputs/ContactsSelectInput';
import IntrosSelectInput from '../../../../components/inputs/IntrosSelectInput';
import ExperiencesSelectInput from '../../../../components/inputs/ExperiencesSelectInput';
import EducationsSelectInput from '../../../../components/inputs/EducationsSelectInput';
import SkillsSelectInput from '../../../../components/inputs/SkillsSelectInput';
import ProjectsSelectInput from '../../../../components/inputs/ProjectsSelectInput';
function ResumeForm({ innerRef, defaultValues }) {
  const { translate } = useLocale();
  const validator = useValidator();
  const schema = validator.form({
    title: validator.title(),
    //TODO ver  como hacer que al submitear diga que es requerido
    introId: validator.id(),
    contactId: validator.id(),
    experiencesIds: validator.ids(),
    skillsIds: validator.ids(),
    educationsIds: validator.ids(),
    projectsIds: validator.ids(),
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
        label={translate(DASHBOARD_TEXTS.RESUME_TITLE_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.RESUME_FORM_TITLE_PLACEHOLDER)}
        multiline
      ></ControllerInput>
      <ControllerInput
        render={IntrosSelectInput}
        name="introId"
        label={translate(DASHBOARD_TEXTS.RESUME_INTRO_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.RESUME_FORM_INTRO_PLACEHOLDER)}
        placeholderProps={{ disabled: true }}
      ></ControllerInput>
      <ControllerInput
        render={ContactsSelectInput}
        name="contactId"
        label={translate(DASHBOARD_TEXTS.RESUME_CONTACT_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.RESUME_FORM_CONTACT_PLACEHOLDER)}
        placeholderProps={{ disabled: true }}
      ></ControllerInput>
      <ControllerInput
        render={ExperiencesSelectInput}
        name="experiencesIds"
        defaultValue={[]}
        multiple
        label={translate(DASHBOARD_TEXTS.RESUME_EXPERIENCES_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.RESUME_FORM_EXPERIENCES_PLACEHOLDER
        )}
        placeholderProps={{ disabled: true }}
      ></ControllerInput>
      <ControllerInput
        render={EducationsSelectInput}
        name="educationsIds"
        defaultValue={[]}
        multiple
        label={translate(DASHBOARD_TEXTS.RESUME_EDUCATIONS_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.RESUME_FORM_EDUCATIONS_PLACEHOLDER
        )}
        placeholderProps={{ disabled: true }}
      ></ControllerInput>
      <ControllerInput
        render={SkillsSelectInput}
        name="skillsIds"
        defaultValue={[]}
        multiple
        label={translate(DASHBOARD_TEXTS.SKILLS_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.FORM_SKILLS_PLACEHOLDER)}
        placeholderProps={{ disabled: true }}
      ></ControllerInput>
      <ControllerInput
        render={ProjectsSelectInput}
        name="projectsIds"
        defaultValue={[]}
        multiple
        label={translate(DASHBOARD_TEXTS.RESUME_PROJECTS_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.RESUME_FORM_PROJECTS_PLACEHOLDER
        )}
        placeholderProps={{ disabled: true }}
      ></ControllerInput>
    </Form>
  );
}

export default ResumeForm;
