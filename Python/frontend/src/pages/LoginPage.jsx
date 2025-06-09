import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Remplacer par un appel API réel
    if (email === 'test@test.com' && password === 'test') {
      onLogin({ nom: 'Test', prenom: 'User', email });
    } else {
      setError('Identifiants invalides');
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} required />
        <button type="submit">Se connecter</button>
      </form>
      {error && <div style={{color:'red'}}>{error}</div>}
    </div>
  );
};

export default LoginPage;
