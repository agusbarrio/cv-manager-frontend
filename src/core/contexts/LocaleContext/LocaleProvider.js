import { createContext, useCallback, useMemo } from 'react';
import mustache from 'mustache';
import _ from 'lodash';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
export const LocaleContext = createContext();

function LocaleProvider({
  children,
  lang,
  defaultLang = 'en',
  dateFormat,
  defaultDateFormat = 'DD/MM/YYYY',
}) {
  const translate = useCallback(
    (translation, params = {}) => {
      if (_.isString(translation)) return translation;
      const errorMessage = 'Translation not found';
      const currentLang = lang || defaultLang;
      const text =
        translation && translation[currentLang]
          ? translation[currentLang]
          : errorMessage;

      return mustache.render(text, params);
    },
    [defaultLang, lang]
  );

  const resultDateFormat = useMemo(
    () => dateFormat || defaultDateFormat,
    [dateFormat, defaultDateFormat]
  );

  return (
    <LocaleContext.Provider value={{ translate, dateFormat: resultDateFormat }}>
      <LocalizationProvider
        dateAdapter={AdapterMoment}
        dateFormats={{ fullDate: resultDateFormat }}
      >
        {children}
      </LocalizationProvider>
    </LocaleContext.Provider>
  );
}

export default LocaleProvider;
