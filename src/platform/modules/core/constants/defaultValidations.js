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
    min: { value: 4, message: CORE_TEXTS.VALIDATIONS_PASSWORD_MIN },
    max: { value: 16, message: CORE_TEXTS.VALIDATIONS_PASSWORD_MAX },
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
};

export default DEFAULT_VALIDATIONS;
