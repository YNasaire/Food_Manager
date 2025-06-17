import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getFavoriesByUser, deleteFavorieItem } from '../api';

const FavoriePage = ({ isConnected, user }) => {
  const [favoris, setFavoris] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFavoris = () => {
    if (isConnected && user?.id) {
      getFavoriesByUser(user.id).then(data => setFavoris(data));
    } else {
      setFavoris([]);
    }
  };

  useEffect(() => { fetchFavoris(); }, [isConnected, user]);

  const handleDelete = async (itemId, itemNom) => {
    if (!window.confirm(`Supprimer "${itemNom}" de vos favoris ?`)) return;
    setLoading(true);
    await deleteFavorieItem(itemId);
    fetchFavoris();
    setLoading(false);
  };

  return (
    <div style={{maxWidth: 700, margin: 'auto'}}>
      <Navbar isConnected={isConnected} user={user} />
      <h2 style={{color:'#f59e42'}}>Mes Plats Favoris</h2>
      <ul style={{padding:0, listStyle:'none'}}>
        {favoris.map(f => (
          <li key={f.id} style={{
            marginBottom: '1rem', display:'flex', alignItems:'center',
            background:'#fff8f3', borderRadius:8, padding:12, boxShadow:'0 2px 8px #fbbf6b'
          }}>
            {f.image_url && <img src={f.image_url} alt={f.nom} style={{height:40, marginRight:8}} />}
            <div style={{flex:1}}>
              <b>{f.nom}</b>
              <div style={{fontSize:'0.9em', color:'#555'}}>{f.description}</div>
              <div style={{fontSize:'0.85em', color:'#888'}}><b>Ingrédients:</b> {f.ingredients}</div>
            </div>
            <button
              onClick={() => handleDelete(f.id, f.nom)}
              style={{
                marginLeft: 12, background: '#f59e42', color: '#fff',
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

export default FavoriePage;
