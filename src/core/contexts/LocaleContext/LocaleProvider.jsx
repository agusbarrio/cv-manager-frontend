import { createContext, useCallback } from 'react';
import mustache from 'mustache';
export const LocaleContext = createContext();

function LocaleProvider({ children, lang, defaultLang = 'en' }) {
  const translate = useCallback(
    (translation, params = {}) => {
      const currentLang = lang || defaultLang;
      const text = translation[currentLang];
      const result = !!text
        ? mustache.render(text, params)
        : 'Translation not found';
      return result;
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
