import { useContext } from 'react';
import { LocaleContext } from './LocaleProvider';

function useLocale() {
  const { translate, dateFormat } = useContext(LocaleContext);
  return { translate, dateFormat };
}

export default useLocale;
