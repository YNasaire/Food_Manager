import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getBuffetByUser, getAllergiesByUser, getFavoriesByUser } from '../api';

const jours = Array.from({length: 30}, (_, i) => `Jour ${i+1}`);

const PlatMoisPage = ({ isConnected, user }) => {
  const [platsMois, setPlatsMois] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const planifier = async () => {
      if (!isConnected || !user?.id) return setPlatsMois([]);
      setLoading(true);
      const [buffet, allergies, favoris] = await Promise.all([
        getBuffetByUser(user.id),
        getAllergiesByUser(user.id),
        getFavoriesByUser(user.id)
      ]);
      const allergieIds = new Set(allergies.map(a => a.id_nourriture || a.id));
      const buffetFiltre = buffet.filter(
        b => !allergieIds.has(b.id_nourriture || b.id)
      );
      const favorieIds = new Set(favoris.map(f => f.id_nourriture || f.id));
      const favorisDansBuffet = buffetFiltre.filter(b => favorieIds.has(b.id_nourriture || b.id));
      const autres = buffetFiltre.filter(b => !favorieIds.has(b.id_nourriture || b.id));
      const selection = [...favorisDansBuffet, ...autres];
      // Répéter la liste si moins de 30 plats
      const plats = Array.from({length: 30}, (_, i) => selection[i % selection.length]?.nom || "Aucun plat disponible");
      setPlatsMois(plats);
      setLoading(false);
    };
    planifier();
  }, [isConnected, user]);

  return (
    <div style={{maxWidth: 700, margin: 'auto'}}>
      <Navbar isConnected={isConnected} user={user} />
      <h2 style={{color:'#16a34a'}}>Plats du Mois</h2>
      {loading ? <div>Chargement...</div> :
      <ul style={{padding:0, listStyle:'none'}}>
        {platsMois.map((nom, i) => (
          <li key={i} style={{
            marginBottom: '0.7rem', background:'#e7fbe7', borderRadius:8, padding:10,
            boxShadow:'0 2px 8px #bbf7d0'
          }}>
            <b>{jours[i]} :</b> {nom}
          </li>
        ))}
      </ul>}
    </div>
  );
};

export default PlatMoisPage;
