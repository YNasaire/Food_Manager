import React from 'react';
import Navbar from '../components/Navbar';

const FavoriePage = ({ isConnected, user }) => {
  // TODO: Remplacer par un appel API réel
  const favoris = [
    { id: 1, nom: 'Pizza' },
    { id: 2, nom: 'Salade' },
  ];
  return (
    <div>
      <Navbar isConnected={isConnected} user={user} />
      <h2>Mes Plats Favoris</h2>
      <ul>
        {favoris.map(f => <li key={f.id}>{f.nom}</li>)}
      </ul>
    </div>
  );
};

export default FavoriePage;
