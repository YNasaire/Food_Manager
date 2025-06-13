import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getFavoriesByUser } from '../api';

const FavoriePage = ({ isConnected, user }) => {
  const [favoris, setFavoris] = useState([]);
  useEffect(() => {
    if (isConnected && user?.id) {
      getFavoriesByUser(user.id).then(data => setFavoris(data));
    } else {
      setFavoris([]);
    }
  }, [isConnected, user]);
  return (
    <div>
      <Navbar isConnected={isConnected} user={user} />
      <h2>Mes Plats Favoris</h2>
      <ul>
        {favoris.map(f => (
          <li key={f.id} style={{marginBottom: '1rem'}}>
            {f.image_url && <img src={f.image_url} alt={f.nom} style={{height:40, marginRight:8, verticalAlign:'middle'}} />}
            <b>{f.nom}</b>
            <div style={{fontSize:'0.9em', color:'#555'}}>{f.description}</div>
            <div style={{fontSize:'0.85em', color:'#888'}}><b>Ingrédients:</b> {f.ingredients}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriePage;
