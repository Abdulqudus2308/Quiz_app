
import './App.css';
import {BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Questions from './pages/Questions';
import Result from './pages/Result';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={Home}  />
      <Route path='/quiz/:subject' Component={Questions}  />
      <Route path='/result' Component={Result}  />
    </Routes>

    </BrowserRouter>
    
  );
}

export default App;
