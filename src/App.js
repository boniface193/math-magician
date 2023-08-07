import { BrowserRouter as CreateElement, Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import './style.css';

function App() {
  return (
    <CreateElement>
      <Routes>
        <Route path="/" element={<Calculator />} />
      </Routes>
    </CreateElement>
  );
}

export default App;
