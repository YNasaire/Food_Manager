import React from 'react';
import { nourrituresStatic } from '../nourrituresStatic';
import styles from './NourriturePage.module.css';

const NourriturePage = ({ isConnected, user }) => {
  const [search, setSearch] = React.useState('');
  const filtered = nourrituresStatic.filter(n => n.nom.toLowerCase().includes(search.toLowerCase()));

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
              <button>Favorie</button>
              <button>Allergique</button>
              <button>Ajouter au buffet</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NourriturePage;
