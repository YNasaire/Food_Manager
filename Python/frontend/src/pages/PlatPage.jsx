import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const PlatPage = ({ isConnected, user }) => {
  const [nom, setNom] = useState('');
  const [plats, setPlats] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (nom) {
      setPlats([...plats, { id: plats.length + 1, nom }]);
      setNom('');
    }
  };

  return (
    <div>
      <Navbar isConnected={isConnected} user={user} />
      <h2>Ajouter un Plat</h2>
      <form onSubmit={handleAdd}>
        <input placeholder="Nom du plat" value={nom} onChange={e => setNom(e.target.value)} required />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {plats.map(p => <li key={p.id}>{p.nom}</li>)}
      </ul>
    </div>
  );
};

export default PlatPage;
