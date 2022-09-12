import { Routes, Route } from 'react-router-dom';
import { Hero } from './components/index';
import { Login, Checkout, Home, About } from './pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
}

export default App;
