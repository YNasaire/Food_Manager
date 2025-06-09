import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AccueilPage from './pages/AccueilPage';
import BuffetPage from './pages/BuffetPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NourriturePage from './pages/NourriturePage';
import FavoriePage from './pages/FavoriePage';
import AllergiePage from './pages/AllergiePage';
import PlatJourPage from './pages/PlatJourPage';
import PlatMoisPage from './pages/PlatMoisPage';
import PlatPage from './pages/PlatPage';
import PlatExpirePage from './pages/PlatExpirePage';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setIsConnected(true);
    setUser(userData);
  };
  const handleLogout = () => {
    setIsConnected(false);
    setUser(null);
  };
  const handleRegister = (userData) => {
    setIsConnected(true);
    setUser(userData);
  };

  return (
    <Router>
      <Navbar isConnected={isConnected} user={user} onLogout={handleLogout} />
      <div style={{marginTop: '80px'}}>
        <Routes>
          <Route path="/" element={<AccueilPage />} />
          <Route path="/nourritures" element={<NourriturePage isConnected={isConnected} user={user} />} />
          <Route path="/buffet" element={isConnected ? <BuffetPage isConnected={isConnected} user={user} /> : <Navigate to="/login" />} />
          <Route path="/favoris" element={isConnected ? <FavoriePage isConnected={isConnected} user={user} /> : <Navigate to="/login" />} />
          <Route path="/allergies" element={isConnected ? <AllergiePage isConnected={isConnected} user={user} /> : <Navigate to="/login" />} />
          <Route path="/plat-jour" element={isConnected ? <PlatJourPage isConnected={isConnected} user={user} /> : <Navigate to="/login" />} />
          <Route path="/plat-mois" element={isConnected ? <PlatMoisPage isConnected={isConnected} user={user} /> : <Navigate to="/login" />} />
          <Route path="/plat-expire" element={isConnected ? <PlatExpirePage isConnected={isConnected} user={user} /> : <Navigate to="/login" />} />
          <Route path="/plat" element={isConnected ? <PlatPage isConnected={isConnected} user={user} /> : <Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
          <Route path="/register" element={<RegisterPage onRegister={handleRegister} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
