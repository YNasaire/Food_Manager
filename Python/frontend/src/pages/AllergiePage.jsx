import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getAllergiesByUser } from '../api';

const AllergiePage = ({ isConnected, user }) => {
  const [allergiques, setAllergiques] = useState([]);
  useEffect(() => {
    if (isConnected && user?.id) {
      getAllergiesByUser(user.id).then(data => setAllergiques(data));
    } else {
      setAllergiques([]);
    }
  }, [isConnected, user]);
  return (
    <div>
      <Navbar isConnected={isConnected} user={user} />
      <h2>Mes Plats/Nourritures Allergiques</h2>
      <ul>
        {allergiques.map(a => (
          <li key={a.id} style={{marginBottom: '1rem'}}>
            {a.image_url && <img src={a.image_url} alt={a.nom} style={{height:40, marginRight:8, verticalAlign:'middle'}} />}
            <b>{a.nom}</b>
            <div style={{fontSize:'0.9em', color:'#555'}}>{a.description}</div>
            <div style={{fontSize:'0.85em', color:'#888'}}><b>Ingrédients:</b> {a.ingredients}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllergiePage;
