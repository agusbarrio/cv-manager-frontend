import { useContext } from 'react';
import { LocaleContext } from './LocaleProvider';

function useLocale() {
  const { translate } = useContext(LocaleContext);
  return { translate };
}

export default useLocale;
