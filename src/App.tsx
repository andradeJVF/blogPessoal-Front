import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/statics/navbar/NavBar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/cadastro" element={<CadastroUsuario />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;