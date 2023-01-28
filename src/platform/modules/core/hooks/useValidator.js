import * as Yup from 'yup';
import { useCallback } from 'react';
import DEFAULT_VALIDATIONS from '../constants/defaultValidations';
import _ from 'lodash';
import YupPassword from 'yup-password';
import useLocale from '../../../../core/contexts/LocaleContext/useLocale';
YupPassword(Yup);

function useValidator() {
  const { translate } = useLocale();
  const form = useCallback((schema) => Yup.object(schema), []);

  const string = useCallback(
    (config) => {
      let yupString = Yup.string();
      if (config?.required?.value)
        yupString = yupString.required(translate(config.required.message));
      if (config?.nullable?.value)
        yupString = yupString.nullable(translate(config.nullable.message));
      if (config?.max?.value) {
        const max = config.max.value;
        yupString = yupString.max(max, translate(config.max.message, { max }));
      }
      if (config?.min?.value) {
        const min = config.min.value;
        yupString = yupString.min(min, translate(config.min.message, { min }));
      }
      return yupString;
    },
    [translate]
  );

  const email = useCallback(
    (config) => {
      const configResult = _.merge(
        _.cloneDeep(DEFAULT_VALIDATIONS.EMAIL),
        config
      );
      let yupElement = string(null, configResult);
      yupElement = yupElement.email(translate(configResult.email?.message));
      return yupElement;
    },
    [string, translate]
  );

  const password = useCallback(
    (config) => {
      const configResult = _.merge(
        _.cloneDeep(DEFAULT_VALIDATIONS.PASSWORD),
        config
      );
      let yupElement = string(configResult).password();
      if (configResult.minUppercase?.value) {
        const minUppercase = configResult.minUppercase.value;
        yupElement = yupElement.minUppercase(
          minUppercase,
          translate(configResult.minUppercase.message, { min: minUppercase })
        );
      }
      if (configResult.minLowercase?.value) {
        const minLowercase = configResult.minLowercase.value;
        yupElement = yupElement.minLowercase(
          minLowercase,
          translate(configResult.minLowercase.message, { min: minLowercase })
        );
      }
      if (configResult.minNumbers?.value) {
        const minNumbers = configResult.minNumbers.value;
        yupElement = yupElement.minNumbers(
          minNumbers,
          translate(configResult.minNumbers.message, { min: minNumbers })
        );
      }
      if (configResult.minSymbols?.value) {
        const minSymbols = configResult.minSymbols.value;
        yupElement = yupElement.minSymbols(
          minSymbols,
          translate(configResult.minSymbols.message, { min: minSymbols })
        );
      }
      return yupElement;
    },
    [string, translate]
  );

  const equalTo = useCallback(
    (field, config) => {
      const configResult = _.merge(
        _.cloneDeep(DEFAULT_VALIDATIONS.EQUAL_TO),
        config
      );

      return string(null, configResult).oneOf(
        [Yup.ref(field)],
        translate(configResult.oneOf?.message)
      );
    },
    [string, translate]
  );

  const title = useCallback(
    (config) => {
      const configResult = _.merge(
        _.cloneDeep(DEFAULT_VALIDATIONS.TITLE),
        config
      );
      const yupTitle = string(configResult);
      return yupTitle;
    },
    [string]
  );

  const description = useCallback(
    (config) => {
      const configResult = _.merge(
        _.cloneDeep(DEFAULT_VALIDATIONS.DESCRIPTION),
        config
      );
      const yupDescription = string(configResult);
      return yupDescription;
    },
    [string]
  );

  const name = useCallback(
    (config) => {
      const configResult = _.merge(
        _.cloneDeep(DEFAULT_VALIDATIONS.NAME),
        config
      );
      const yupName = string(configResult);
      return yupName;
    },
    [string]
  );

  const date = (config = {}) => {
    const configResult = _.merge(_.cloneDeep(DEFAULT_VALIDATIONS.DATE), config);

    let yupDate = Yup.date().typeError(translate(configResult.date.message));
    if (configResult.required && configResult.required.value) {
      yupDate = yupDate.required(translate(configResult.required.message));
    }
    if (configResult?.nullable?.value)
      yupDate = yupDate.nullable(translate(configResult.nullable.message));
    if (configResult.min && configResult.min.value) {
      const min = configResult.min.value;
      yupDate = yupDate.min(min, translate(configResult.min.message, { min }));
    }
    if (configResult.max && configResult.max.value) {
      const max = configResult.max.value;
      yupDate = yupDate.min(max, translate(configResult.max.message, { max }));
    }
    return yupDate;
  };

  return {
    form,
    string,
    email,
    password,
    equalTo,
    name,
    title,
    description,
    date,
  };
}

export default useValidator;
