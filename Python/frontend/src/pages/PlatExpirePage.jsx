import React from 'react';
import Navbar from '../components/Navbar';

const PlatExpirePage = ({ isConnected, user }) => {
  // TODO: Remplacer par un appel API réel
  const expires = [
    { id: 1, nom: 'Yaourt', date: '2025-06-01' },
    { id: 2, nom: 'Jus de fruit', date: '2025-06-03' },
  ];
  return (
    <div>
      <Navbar isConnected={isConnected} user={user} />
      <h2>Plats/Nourritures Expirés</h2>
      <ul>
        {expires.map(e => <li key={e.id}>{e.nom} (expiré le {e.date})</li>)}
      </ul>
    </div>
  );
};

export default PlatExpirePage;
