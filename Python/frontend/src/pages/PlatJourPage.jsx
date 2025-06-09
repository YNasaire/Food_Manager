import React from 'react';
import Navbar from '../components/Navbar';

const PlatJourPage = ({ isConnected, user }) => {
  // TODO: Remplacer par un appel API réel
  const platsJour = [
    { moment: 'Matin', nom: 'Omelette' },
    { moment: 'Midi', nom: 'Poulet rôti' },
    { moment: 'Soir', nom: 'Soupe' },
  ];
  return (
    <div>
      <Navbar isConnected={isConnected} user={user} />
      <h2>Plats du Jour</h2>
      <ul>
        {platsJour.map((p, i) => <li key={i}><b>{p.moment} :</b> {p.nom}</li>)}
      </ul>
    </div>
  );
};

export default PlatJourPage;
