import React from 'react';
import { nourrituresStatic } from '../nourrituresStatic';
import styles from './NourriturePage.module.css';
import { addBuffet, addFavorie, addAllergie } from '../api';

const NourriturePage = ({ isConnected, user }) => {
  const [search, setSearch] = React.useState('');
  const filtered = nourrituresStatic.filter(n => n.nom.toLowerCase().includes(search.toLowerCase()));

  const handleBuffet = async (n) => {
    if (!isConnected || !user?.id) return alert('Connectez-vous !');
    await addBuffet({
      id_utilisateur: user.id,
      id_nourriture: n.id,
      image_url: n.imageUrl,
      date: new Date().toISOString().slice(0, 10),
      type: 'nourriture'
    });
    alert('Ajouté au buffet !');
  };
  const handleFavorie = async (n) => {
    if (!isConnected || !user?.id) return alert('Connectez-vous !');
    await addFavorie({
      id_utilisateur: user.id,
      id_nourriture: n.id,
      date: new Date().toISOString().slice(0, 10)
    });
    alert('Ajouté aux favoris !');
  };
  const handleAllergie = async (n) => {
    if (!isConnected || !user?.id) return alert('Connectez-vous !');
    await addAllergie({
      id_utilisateur: user.id,
      id_nourriture: n.id,
      date: new Date().toISOString().slice(0, 10)
    });
    alert('Ajouté à la liste des allergies !');
  };

  return (
    <div className={styles['nourriture-container']}>
      <div className={styles['nourriture-header']}>
        <h2>Nourritures disponibles</h2>
        <input className={styles['nourriture-search']} placeholder="Rechercher..." value={search} onChange={e => setSearch(e.target.value)} />
      </div>
      <div className={styles['nourriture-grid']}>
        {filtered.map(n => (
          <div key={n.id} className={styles['nourriture-card']}>
            <img src={n.imageUrl} alt={n.nom} />
            <h3>{n.nom}</h3>
            <p>{n.description}</p>
            <p><b>Ingrédients:</b> {n.ingredients}</p>
            <div className={styles['nourriture-actions']}>
              <button onClick={() => handleFavorie(n)}>Favorie</button>
              <button onClick={() => handleAllergie(n)}>Allergique</button>
              <button onClick={() => handleBuffet(n)}>Ajouter au buffet</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NourriturePage;
