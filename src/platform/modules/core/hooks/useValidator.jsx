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
    (yupElement, config) => {
      let yupString = yupElement || Yup.string();
      if (config?.required?.value)
        yupString = yupString.required(translate(config.required.message));
      if (config?.nullable?.value)
        yupString = yupString.nullable(translate(config.nullable.message));
      if (config?.max?.value) {
        const max = config.max.value;
        yupString = yupString.max(max, translate(config.max.message, { max }));
      }
      return yupString;
    },
    [translate]
  );

  const email = useCallback(
    (config) => {
      const configResult = _.merge(DEFAULT_VALIDATIONS.EMAIL, config);
      let yupElement = string(null, configResult);
      yupElement = yupElement.email(translate(configResult.email?.message));
      return yupElement;
    },
    [string, translate]
  );

  const password = useCallback(
    (config) => {
      const configResult = _.merge(DEFAULT_VALIDATIONS.PASSWORD, config);
      let yupElement = string(null, configResult).password();
      if (configResult.min?.value) {
        const min = configResult.min.value;
        yupElement = yupElement.min(
          min,
          translate(configResult.min.message, { min })
        );
      }
      if (configResult.max?.value) {
        const max = configResult.max.value;
        yupElement = yupElement.max(
          max,
          translate(configResult.max.message, { max })
        );
      }
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
      const configResult = _.merge(DEFAULT_VALIDATIONS.EQUAL_TO, config);

      return string(null, configResult).oneOf(
        [Yup.ref(field)],
        translate(configResult.oneOf?.message)
      );
    },
    [string, translate]
  );
  return { form, string, email, password, equalTo };
}

export default useValidator;
