import ControllerInput from '../../../../../../../core/components/inputs/Form/controllers/ControllerInput';
import TextInput from '../../../../../../../core/components/inputs/TextInput';
import DASHBOARD_TEXTS from '../../../../constants/texts';
import useLocale from '../../../../../../../core/contexts/LocaleContext/useLocale';
import useValidator from '../../../../../core/hooks/useValidator';
import Form from '../../../../../../../core/components/inputs/Form';

function ContactForm({ innerRef, defaultValues }) {
  const { translate } = useLocale();
  const validator = useValidator();
  const schema = validator.form({
    title: validator.title(),
    linkedin: validator.url(),
    facebook: validator.url(),
    twitter: validator.url(),
    email: validator.email(),
    phone: validator.name({ required: { value: false } }),
    mobilePhone: validator.name({ required: { value: false } }),
    address: validator.name({ required: { value: false } }),
    github: validator.url(),
    country: validator.name({ required: { value: false } }),
    postalCode: validator.name({ required: { value: false } }),
    city: validator.name({ required: { value: false } }),
    website: validator.url(),
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
        label={translate(DASHBOARD_TEXTS.CONTACT_TITLE_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.CONTACT_FORM_TITLE_PLACEHOLDER)}
        multiline
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="linkedin"
        label={translate(DASHBOARD_TEXTS.CONTACT_LINKEDIN_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.CONTACT_FORM_LINKEDIN_PLACEHOLDER
        )}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="facebook"
        label={translate(DASHBOARD_TEXTS.CONTACT_FACEBOOK_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.CONTACT_FORM_FACEBOOK_PLACEHOLDER
        )}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="twitter"
        label={translate(DASHBOARD_TEXTS.CONTACT_TWITTER_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.CONTACT_FORM_TWITTER_PLACEHOLDER
        )}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="email"
        label={translate(DASHBOARD_TEXTS.CONTACT_EMAIL_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.CONTACT_FORM_EMAIL_PLACEHOLDER)}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="phone"
        label={translate(DASHBOARD_TEXTS.CONTACT_PHONE_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.CONTACT_FORM_PHONE_PLACEHOLDER)}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="mobilePhone"
        label={translate(DASHBOARD_TEXTS.CONTACT_MOBILE_PHONE_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.CONTACT_FORM_MOBILE_PHONE_PLACEHOLDER
        )}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="address"
        label={translate(DASHBOARD_TEXTS.CONTACT_ADDRESS_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.CONTACT_FORM_ADDRESS_PLACEHOLDER
        )}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="github"
        label={translate(DASHBOARD_TEXTS.CONTACT_GITHUB_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.CONTACT_FORM_GITHUB_PLACEHOLDER)}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="country"
        label={translate(DASHBOARD_TEXTS.CONTACT_COUNTRY_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.CONTACT_FORM_COUNTRY_PLACEHOLDER
        )}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="postalCode"
        label={translate(DASHBOARD_TEXTS.CONTACT_POSTAL_CODE_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.CONTACT_FORM_POSTAL_CODE_PLACEHOLDER
        )}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="city"
        label={translate(DASHBOARD_TEXTS.CONTACT_CITY_LABEL)}
        placeholder={translate(DASHBOARD_TEXTS.CONTACT_FORM_CITY_PLACEHOLDER)}
      ></ControllerInput>
      <ControllerInput
        render={TextInput}
        name="website"
        label={translate(DASHBOARD_TEXTS.CONTACT_WEBSITE_LABEL)}
        placeholder={translate(
          DASHBOARD_TEXTS.CONTACT_FORM_WEBSITE_PLACEHOLDER
        )}
      ></ControllerInput>
    </Form>
  );
}

export default ContactForm;
