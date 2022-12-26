import RouterManager from '../../core/components/managers/RouterManager';
import LocaleProvider from '../../core/contexts/LocaleContext/LocaleProvider';
import SnackbarProvider from '../../core/contexts/SnackbarProvider/SnackbarProvider';
import './App.css';
import routes from './routes';

function App() {
  return (
    <LocaleProvider defaultLang="es">
      <SnackbarProvider
        maxSnack={2}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <RouterManager routes={routes}></RouterManager>
      </SnackbarProvider>
    </LocaleProvider>
  );
}

export default App;
