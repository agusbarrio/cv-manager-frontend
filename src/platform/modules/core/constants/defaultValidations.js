import CORE_TEXTS from './texts';
const DEFAULT_VALIDATIONS = {
  EMAIL: {
    email: { value: true, message: CORE_TEXTS.VALIDATIONS_EMAIL },
    required: {
      value: true,
      message: CORE_TEXTS.VALIDATIONS_REQUIRED,
    },
  },
  PASSWORD: {
    min: { value: 4, message: CORE_TEXTS.VALIDATIONS_MIN },
    max: { value: 16, message: CORE_TEXTS.VALIDATIONS_MAX },
    minUppercase: {
      value: 1,
      message: CORE_TEXTS.VALIDATIONS_PASSWORD_MINUPPERCASE,
    },
    minLowercase: {
      value: 1,
      message: CORE_TEXTS.VALIDATIONS_PASSWORD_MINLOWERCASE,
    },
    minNumbers: {
      value: 1,
      message: CORE_TEXTS.VALIDATIONS_PASSWORD_MINNUMBERS,
    },
    minSymbols: {
      value: 1,
      message: CORE_TEXTS.VALIDATIONS_PASSWORD_MINSYMBOLS,
    },
    required: {
      value: true,
      message: CORE_TEXTS.VALIDATIONS_REQUIRED,
    },
  },
  EQUAL_TO: {
    required: {
      value: true,
      message: CORE_TEXTS.VALIDATIONS_REQUIRED,
    },
    oneOf: {
      message: CORE_TEXTS.VALIDATIONS_EQUAL_TO,
    },
  },
  TITLE: {
    required: { value: true, message: CORE_TEXTS.VALIDATIONS_REQUIRED },
    max: { value: 140, message: CORE_TEXTS.VALIDATIONS_MAX },
  },
  DESCRIPTION: {
    required: { value: false, message: CORE_TEXTS.VALIDATIONS_REQUIRED },
    max: { value: 255, message: CORE_TEXTS.VALIDATIONS_MAX },
  },
  NAME: {
    required: { value: true, message: CORE_TEXTS.VALIDATIONS_REQUIRED },
    max: { value: 60, message: CORE_TEXTS.VALIDATIONS_MAX },
  },
  DATE: {
    date: { value: true, message: CORE_TEXTS.VALIDATIONS_DATE },
    required: { value: false, message: CORE_TEXTS.VALIDATIONS_REQUIRED },
  },
  URL: {
    required: { value: false, message: CORE_TEXTS.VALIDATIONS_URL },
    max: { value: 2083 },
  },
};

export default DEFAULT_VALIDATIONS;
