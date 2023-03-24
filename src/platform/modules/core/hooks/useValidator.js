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
      if (config?.required?.value) {
        yupString = yupString.required(translate(config.required.message));
      } else {
        yupString = yupString.nullable();
      }

      if (config?.max?.value) {
        const max = config.max.value;
        yupString = yupString.max(max, translate(config.max.message, { max }));
      }
      if (config?.min?.value) {
        const min = config.min.value;
        yupString = yupString.min(min, translate(config.min.message, { min }));
      }
      if (config?.url?.value) {
        yupString = yupString.url(translate(config.url.message));
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

  const text = useCallback(
    (config) => {
      const configResult = _.merge(
        _.cloneDeep(DEFAULT_VALIDATIONS.TEXT),
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

  const date = useCallback(
    (config = {}) => {
      const configResult = _.merge(
        _.cloneDeep(DEFAULT_VALIDATIONS.DATE),
        config
      );

      let yupDate = Yup.date().typeError(translate(configResult.date.message));
      if (configResult.required && configResult.required.value) {
        yupDate = yupDate.required(translate(configResult.required.message));
      }
      yupDate = yupDate.nullable();
      if (configResult.min && configResult.min.value) {
        const min = configResult.min.value;
        yupDate = yupDate.min(
          min,
          translate(configResult.min.message, { min })
        );
      }
      if (configResult.max && configResult.max.value) {
        const max = configResult.max.value;
        yupDate = yupDate.min(
          max,
          translate(configResult.max.message, { max })
        );
      }
      return yupDate;
    },
    [translate]
  );

  const oneOf = useCallback(
    (values, config = {}) => {
      const yupOneOf = string(config).oneOf(values);
      return yupOneOf;
    },
    [string]
  );

  const url = useCallback(
    (config = {}) => {
      const configResult = _.merge(
        _.cloneDeep(DEFAULT_VALIDATIONS.URL),
        config
      );
      const yupUrl = string(configResult);
      return yupUrl;
    },
    [string]
  );

  const number = useCallback(
    (config = {}) => {
      const configResult = _.merge(
        _.cloneDeep(DEFAULT_VALIDATIONS.NUMBER),
        config
      );

      let yupNumber = Yup.number().typeError(
        translate(configResult.number.message)
      );
      if (configResult.required && configResult.required.value) {
        yupNumber = yupNumber.required(
          translate(configResult.required.message)
        );
      } else {
        yupNumber = yupNumber.nullable();
      }
      if (configResult.integer && configResult.integer.value) {
        yupNumber = yupNumber.integer(translate(configResult.integer.message));
      }
      if (configResult.min && configResult.min.value) {
        const min = configResult.min.value;
        yupNumber = yupNumber.min(
          min,
          translate(configResult.min.message, { min })
        );
      }
      if (configResult.max && configResult.max.value) {
        const max = configResult.max.value;
        yupNumber = yupNumber.max(
          max,
          translate(configResult.max.message, { max })
        );
      }
      if (configResult.moreThan && configResult.moreThan.value) {
        const moreThan = configResult.moreThan.value;
        yupNumber = yupNumber.moreThan(
          moreThan,
          translate(configResult.moreThan.message, { moreThan })
        );
      }
      if (configResult.lessThan && configResult.lessThan.value) {
        const lessThan = configResult.lessThan.value;
        yupNumber = yupNumber.lessThan(
          lessThan,
          translate(configResult.lessThan.message, { lessThan })
        );
      }
      return yupNumber;
    },
    [translate]
  );

  const id = useCallback(
    (config = {}) => {
      const resultConfig = _.merge(_.cloneDeep(DEFAULT_VALIDATIONS.ID), config);
      const yupId = number(resultConfig).transform((value) =>
        isNaN(value) ? undefined : value
      );
      return yupId;
    },
    [number]
  );
  const array = useCallback((_config = {}) => {
    const yupArray = Yup.array();
    return yupArray;
  }, []);

  const ids = useCallback(
    (config = {}) => {
      const yupIds = array().of(id());
      return yupIds;
    },
    [array, id]
  );

  return {
    form,
    string,
    email,
    password,
    equalTo,
    text,
    description,
    date,
    oneOf,
    url,
    id,
    ids,
  };
}

export default useValidator;
