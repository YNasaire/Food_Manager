import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { getBuffetByUser, getAllergiesByUser, getFavoriesByUser } from '../api';

const moments = ['Matin', 'Midi', 'Soir'];

const PlatJourPage = ({ isConnected, user }) => {
  const [platsJour, setPlatsJour] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const planifier = async () => {
      if (!isConnected || !user?.id) return setPlatsJour([]);
      setLoading(true);
      const [buffet, allergies, favoris] = await Promise.all([
        getBuffetByUser(user.id),
        getAllergiesByUser(user.id),
        getFavoriesByUser(user.id)
      ]);
      // Exclure les plats allergiques
      const allergieIds = new Set(allergies.map(a => a.id_nourriture || a.id));
      // Ne garder que les aliments du buffet non allergènes
      const buffetFiltre = buffet.filter(
        b => !allergieIds.has(b.id_nourriture || b.id)
      );
      // Privilégier les favoris présents dans le buffet
      const favorieIds = new Set(favoris.map(f => f.id_nourriture || f.id));
      const favorisDansBuffet = buffetFiltre.filter(b => favorieIds.has(b.id_nourriture || b.id));
      const autres = buffetFiltre.filter(b => !favorieIds.has(b.id_nourriture || b.id));
      // Sélectionner jusqu'à 3 plats pour Matin/Midi/Soir
      const selection = [...favorisDansBuffet, ...autres].slice(0, 3);
      const result = moments.map((moment, i) => ({
        moment,
        nom: selection[i]?.nom || "Aucun plat disponible"
      }));
      setPlatsJour(result);
      setLoading(false);
    };
    planifier();
  }, [isConnected, user]);

  return (
    <div style={{maxWidth: 600, margin: 'auto'}}>
      <Navbar isConnected={isConnected} user={user} />
      <h2 style={{color:'#4f46e5'}}>Plats du Jour</h2>
      {loading ? <div>Chargement...</div> :
      <ul style={{padding:0, listStyle:'none'}}>
        {platsJour.map((p, i) => (
          <li key={i} style={{
            marginBottom: '1rem', background:'#eef2ff', borderRadius:8, padding:12,
            boxShadow:'0 2px 8px #c7d2fe'
          }}>
            <b>{p.moment} :</b> {p.nom}
          </li>
        ))}
      </ul>}
    </div>
  );
};

export default PlatJourPage;
