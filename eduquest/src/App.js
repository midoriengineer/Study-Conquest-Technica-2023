import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customize from './Pages/Customize'
import Category from './Pages/Category'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Customize" element={<Customize />} />
        <Route exact path="/Category" element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
