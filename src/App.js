import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';       
import Register from './pages/Register';  
import Dashboard from './pages/Dashboard'; 
import './assets/styles/App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<h1>Bem-vindo ao Sistema de Gerenciamento de Clientes!</h1>} />
          <Route path="*" element={<h1>Página não encontrada!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
