import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getAllergiesByUser, deleteAllergieItem } from '../api';

const AllergiePage = ({ isConnected, user }) => {
  const [allergiques, setAllergiques] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllergies = () => {
    if (isConnected && user?.id) {
      getAllergiesByUser(user.id).then(data => setAllergiques(data));
    } else {
      setAllergiques([]);
    }
  };

  useEffect(() => { fetchAllergies(); }, [isConnected, user]);

  const handleDelete = async (itemId, itemNom) => {
    if (!window.confirm(`Supprimer "${itemNom}" de vos allergies ?`)) return;
    setLoading(true);
    await deleteAllergieItem(itemId);
    fetchAllergies();
    setLoading(false);
  };

  return (
    <div style={{maxWidth: 700, margin: 'auto'}}>
      <Navbar isConnected={isConnected} user={user} />
      <h2 style={{color:'#dc2626'}}>Mes Plats/Nourritures Allergiques</h2>
      <ul style={{padding:0, listStyle:'none'}}>
        {allergiques.map(a => (
          <li key={a.id} style={{
            marginBottom: '1rem', display:'flex', alignItems:'center',
            background:'#fff3f3', borderRadius:8, padding:12, boxShadow:'0 2px 8px #fbb6b6'
          }}>
            {a.image_url && <img src={a.image_url} alt={a.nom} style={{height:40, marginRight:8}} />}
            <div style={{flex:1}}>
              <b>{a.nom}</b>
              <div style={{fontSize:'0.9em', color:'#555'}}>{a.description}</div>
              <div style={{fontSize:'0.85em', color:'#888'}}><b>Ingrédients:</b> {a.ingredients}</div>
            </div>
            <button
              onClick={() => handleDelete(a.id, a.nom)}
              style={{
                marginLeft: 12, background: '#dc2626', color: '#fff',
                border: 'none', borderRadius: '6px', padding: '0.5rem 1rem',
                cursor: 'pointer', fontWeight: 'bold'
              }}
              disabled={loading}
            >Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllergiePage;
