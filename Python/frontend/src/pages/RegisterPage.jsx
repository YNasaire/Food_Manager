import React, { useState } from 'react';

const RegisterPage = ({ onRegister }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Remplacer par un appel API réel
    if (email && password && nom && prenom) {
      onRegister({ nom, prenom, email });
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
