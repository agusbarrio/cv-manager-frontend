import { createContext, useCallback } from 'react';
import mustache from 'mustache';
import _ from 'lodash';

export const LocaleContext = createContext();

function LocaleProvider({ children, lang, defaultLang = 'en' }) {
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

  return (
    <LocaleContext.Provider value={{ translate }}>
      {children}
    </LocaleContext.Provider>
  );
}

export default LocaleProvider;
