import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customize from './Pages/Customize'
import Category from './Pages/Category'
import Chat from './Pages/Chat';
import Journey from './Pages/Journey';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/customize" element={<Customize />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/journey" element={<Journey />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
