import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isConnected, onLogout, user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="" height={40} />
        <span>Food Manager</span>
      </div>
      <div className="navbar-links">
        <Link to="/">Accueil</Link>
        <Link to="/nourritures">Nourritures</Link>
        <Link to="/buffet">Mon Buffet</Link>
        {isConnected ? (
          <>
            <span className="navbar-user">{user ? `Connecté : ${user.prenom} ${user.nom}` : ''}</span>
            <button className="navbar-btn" onClick={handleLogout}>Déconnexion</button>
          </>
        ) : (
          <>
            <Link to="/register">Inscription</Link>
            <Link to="/login">Connexion</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
