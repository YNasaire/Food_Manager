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
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)'
    }}>
      <div style={{
        background: '#fff',
        padding: '2.5rem 2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        minWidth: '340px'
      }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#4f46e5' }}>Inscription</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            placeholder="Nom"
            value={nom}
            onChange={e => setNom(e.target.value)}
            required
            style={{
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #c7d2fe',
              fontSize: '1rem'
            }}
          />
          <input
            placeholder="Prénom"
            value={prenom}
            onChange={e => setPrenom(e.target.value)}
            required
            style={{
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #c7d2fe',
              fontSize: '1rem'
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            style={{
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #c7d2fe',
              fontSize: '1rem'
            }}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            style={{
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #c7d2fe',
              fontSize: '1rem'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.75rem',
              borderRadius: '6px',
              border: 'none',
              background: '#4f46e5',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
          >
            S'inscrire
          </button>
        </form>
        {error && (
          <div style={{
            color: '#dc2626',
            marginTop: '1rem',
            textAlign: 'center',
            fontWeight: '500'
          }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
