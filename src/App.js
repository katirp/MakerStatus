import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Technician from './pages/Technician'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path = "/" element = { <Home/> }/>
        <Route path = "/technician-portal" element = { <Technician/> }/>
        <Route path = "/login" element = { <LoginPage/> }/>
      </Routes>
    </main>
    </BrowserRouter>
  );
}

export default App;
