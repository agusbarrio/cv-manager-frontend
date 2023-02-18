import {
  createTheme,
  ThemeProvider as ThemeProviderMaterial,
} from '@mui/material';
import { useMemo } from 'react';
import defaultTheme from './defaultTheme';
import _ from 'lodash';
import { createContext } from 'react';

export const ThemeContext = createContext();

function ThemeProvider({ children, theme }) {
  const mergedTheme = useMemo(
    () => _.merge(_.cloneDeep(theme), _.cloneDeep(defaultTheme)),
    [theme]
  );
  const createdTheme = useMemo(() => createTheme(mergedTheme), [mergedTheme]);

  return (
    <ThemeProviderMaterial theme={createdTheme}>
      <ThemeContext.Provider value={{ theme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProviderMaterial>
  );
}

export default ThemeProvider;
