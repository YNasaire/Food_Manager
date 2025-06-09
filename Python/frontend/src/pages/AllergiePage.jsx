import React from 'react';
import Navbar from '../components/Navbar';

const AllergiePage = ({ isConnected, user }) => {
  // TODO: Remplacer par un appel API réel
  const allergiques = [
    { id: 1, nom: 'Arachide' },
    { id: 2, nom: 'Fraise' },
  ];
  return (
    <div>
      <Navbar isConnected={isConnected} user={user} />
      <h2>Mes Plats/Nourritures Allergiques</h2>
      <ul>
        {allergiques.map(a => <li key={a.id}>{a.nom}</li>)}
      </ul>
    </div>
  );
};

export default AllergiePage;
