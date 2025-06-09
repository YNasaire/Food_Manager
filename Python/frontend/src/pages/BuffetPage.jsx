import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const menuAccueil = (
  <div className="menu-accueil" style={{ marginBottom: '2rem' }}>
    <ul style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', padding: 0, listStyle: 'none' }}>
      <li><Link to="/favoris">Mes Favoris</Link></li>
      <li><Link to="/allergies">Mes Plats/Nourritures Allergiques</Link></li>
      <li><Link to="/plat-jour">Plats du Jour</Link></li>
      <li><Link to="/plat-mois">Plats du Mois</Link></li>
      <li><Link to="/plat">Ajouter un Plat</Link></li>
      <li><Link to="/plat-expire">Plats/Nourritures Expirés</Link></li>
    </ul>
  </div>
);

const BuffetPage = ({ isConnected, user }) => {
  const [buffet, setBuffet] = useState([]);

  useEffect(() => {
    // TODO: Remplacer par un appel API réel
    setBuffet([
      { id: 1, nom: 'Pizza', quantite: 2 },
      { id: 2, nom: 'Salade', quantite: 1 },
    ]);
  }, []);

  return (
    <div>
      {menuAccueil}
      <h2>Mon Buffet</h2>
      <ul>
        {buffet.map(item => (
          <li key={item.id}>{item.nom} (x{item.quantite})</li>
        ))}
      </ul>
    </div>
  );
};

export default BuffetPage;
