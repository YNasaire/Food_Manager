import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBuffetByUser } from '../api';

const menuAccueil = (
  <div className="menu-accueil" style={{ marginBottom: '2rem' }}>
    <ul style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', padding: 0, listStyle: 'none' }}>
      <li><Link to="/favorie">Mes Favoris</Link></li>
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
    if (isConnected && user?.id) {
      getBuffetByUser(user.id).then(data => setBuffet(data));
    } else {
      setBuffet([]);
    }
  }, [isConnected, user]);

  return (
    <div>
      {menuAccueil}
      <h2>Mon Buffet</h2>
      <ul>
        {buffet.map(item => (
          <li key={item.id} style={{marginBottom: '1rem'}}>
            {item.image_url && <img src={item.image_url} alt={item.nom} style={{height:40, marginRight:8, verticalAlign:'middle'}} />}
            <b>{item.nom}</b> (x1)
            <div style={{fontSize:'0.9em', color:'#555'}}>{item.description}</div>
            <div style={{fontSize:'0.85em', color:'#888'}}><b>Ingrédients:</b> {item.ingredients}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuffetPage;
