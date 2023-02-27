import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Pendidikan from './pages/Pendidikan';
import Portfolio from './pages/Portfolio';
import Kontak from './pages/Kontak'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/study" element={<Pendidikan />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path="/contact" element={<Kontak />} />
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
