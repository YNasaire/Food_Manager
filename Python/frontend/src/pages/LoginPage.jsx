import React, { useState } from 'react';
import { login } from '../api';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await login(email, password);
      if (res.user_id) {
        onLogin(res);
      } else {
        setError(res.error || 'Identifiants invalides');
      }
    } catch (err) {
      setError('Erreur serveur');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      maxWidth: 350,
      margin: '60px auto',
      padding: 24,
      borderRadius: 8,
      boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
      background: '#fff'
    }}>
      <h2 style={{textAlign: 'center', marginBottom: 24}}>Connexion</h2>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: 16}}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{
            padding: 10,
            borderRadius: 4,
            border: '1px solid #ccc',
            fontSize: 16
          }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={{
            padding: 10,
            borderRadius: 4,
            border: '1px solid #ccc',
            fontSize: 16
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: 12,
            borderRadius: 4,
            border: 'none',
            background: '#1976d2',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 16,
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1
          }}
        >
          {loading ? 'Connexion...' : 'Se connecter'}
        </button>
      </form>
      {error && <div style={{color:'red', marginTop: 16, textAlign: 'center'}}>{error}</div>}
    </div>
  );
};

export default LoginPage;
