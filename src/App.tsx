import React from 'react';
import NavBar from './components/statics/navbar/NavBar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/Home/Home'
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  )
}

export default App;