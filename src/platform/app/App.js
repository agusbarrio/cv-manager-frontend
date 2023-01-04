import RouterManager from '../../core/components/managers/RouterManager';
import LocaleProvider from '../../core/contexts/LocaleContext/LocaleProvider';
import SnackbarProvider from '../../core/contexts/SnackbarContext/SnackbarProvider';
import './App.css';
import SessionStoreProvider from './contexts/SessionStoreContext/SessionStoreProvider';
import routes from './routes';

function App() {
  return (
    <SessionStoreProvider>
      <LocaleProvider defaultLang="es">
        <SnackbarProvider
          maxSnack={2}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >
          <RouterManager routes={routes}></RouterManager>
        </SnackbarProvider>
      </LocaleProvider>
    </SessionStoreProvider>
  );
}

export default App;
