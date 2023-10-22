import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Chat from './Pages/Chat';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
