import RouterManager from '../../core/components/managers/RouterManager';
import './App.css';
import routes from './routes';

function App() {
  return <RouterManager routes={routes}></RouterManager>;
}

export default App;
