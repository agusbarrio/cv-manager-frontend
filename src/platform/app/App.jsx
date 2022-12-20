import RouterManager from '../../core/components/managers/RouterManager';
import LocaleProvider from '../../core/contexts/LocaleContext/LocaleProvider';
import './App.css';
import routes from './routes';

function App() {
  return (
    <LocaleProvider defaultLang="es">
      <RouterManager routes={routes}></RouterManager>
    </LocaleProvider>
  );
}

export default App;
