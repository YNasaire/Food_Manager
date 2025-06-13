import React, { useState } from 'react';
import { register } from '../api';

const RegisterPage = ({ onRegister }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password && nom && prenom) {
      const res = await register(nom, prenom, email, password);
      if (res.user_id) {
        onRegister({ id: res.user_id, nom, prenom, email });
      } else {
        setError(res.error || 'Erreur lors de l\'inscription');
      }
    } else {
      setError('Tous les champs sont obligatoires');
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Nom" value={nom} onChange={e => setNom(e.target.value)} required />
        <input placeholder="Prénom" value={prenom} onChange={e => setPrenom(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">S'inscrire</button>
      </form>
      {error && <div style={{color:'red'}}>{error}</div>}
    </div>
  );
};

export default RegisterPage;
