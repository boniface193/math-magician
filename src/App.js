import { BrowserRouter as CreateElement, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import './style.css';

function App() {
  return (
    <CreateElement>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </CreateElement>
  );
}

export default App;
