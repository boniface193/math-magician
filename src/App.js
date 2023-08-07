import { BrowserRouter as CreateElement } from 'react-router-dom';
import Calculator from './components/Calculator';
import './style.css';

function App() {
  return (
    <CreateElement>
      <Calculator />
    </CreateElement>
  );
}

export default App;
