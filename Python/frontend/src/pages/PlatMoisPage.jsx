import React from 'react';
import Navbar from '../components/Navbar';

const PlatMoisPage = ({ isConnected, user }) => {
  // TODO: Remplacer par un appel API réel
  const platsMois = [
    { id: 1, nom: 'Riz au poisson', jour: '1er juin' },
    { id: 2, nom: 'Couscous', jour: '2 juin' },
  ];
  return (
    <div>
      <Navbar isConnected={isConnected} user={user} />
      <h2>Plats du Mois</h2>
      <ul>
        {platsMois.map(p => <li key={p.id}>{p.jour} : {p.nom}</li>)}
      </ul>
    </div>
  );
};

export default PlatMoisPage;
