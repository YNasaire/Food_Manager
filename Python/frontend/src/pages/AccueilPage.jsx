import React from 'react';
import { Link } from 'react-router-dom';
import accueilImage from '../images/image_accueil.jpg';

const infos = [
  {
    title: 'Gérez vos nourritures',
    desc: 'Ajoutez, visualisez et organisez toutes vos nourritures et plats préférés avec images.'
  },
  {
    title: 'Buffet personnalisé',
    desc: 'Constituez votre buffet en sélectionnant des plats depuis la liste ou en ajoutant vos propres créations.'
  },
  {
    title: 'Favoris & Allergies',
    desc: 'Marquez vos plats favoris et gérez vos allergies pour une expérience sur-mesure.'
  },
  {
    title: 'Suivi intelligent',
    desc: 'Consultez les plats du jour, du mois, et surveillez les nourritures expirées.'
  },
  {
    title: 'Sécurité & Connexion',
    desc: 'Votre compte est sécurisé. Connectez-vous pour accéder à toutes les fonctionnalités.'
  }
];

const AccueilPage = () => (
  <div className="page-container" style={{maxWidth:900,margin:'0 auto',padding:'2rem 1rem'}}>
    <img src={accueilImage} alt="Accueil" style={{width:'100%',maxWidth:600,borderRadius:16,margin:'2rem auto',display:'block',boxShadow:'0 4px 24px rgba(0,0,0,0.10)'}} />
    <h1 style={{textAlign:'center',marginBottom:'1.2rem'}}>Bienvenue sur <span style={{color:'#ff9800'}}>Food Manager</span></h1>
    <p style={{textAlign:'center',fontSize:'1.15rem',color:'#444',marginBottom:'2.5rem'}}>L'application moderne pour gérer vos nourritures, plats, favoris, allergies et buffet familial !</p>
    <div style={{display:'flex',flexWrap:'wrap',gap:'1.5rem',justifyContent:'center',marginBottom:'2.5rem'}}>
      {infos.map((info,i) => (
        <div key={i} style={{background:'#fff',borderRadius:14,padding:'1.2rem 1.5rem',boxShadow:'0 2px 12px rgba(0,0,0,0.07)',minWidth:220,maxWidth:260}}>
          <h3 style={{margin:'0 0 0.5rem 0',color:'#ff9800',fontSize:'1.1rem'}}>{info.title}</h3>
          <p style={{margin:0,fontSize:'0.98rem',color:'#333'}}>{info.desc}</p>
        </div>
      ))}
    </div>
    <div style={{textAlign:'center',marginBottom:'2rem'}}>
      <b>Commencez :</b> <span style={{color:'#ff9800'}}>Explorez le menu ci-dessus pour naviguer dans toutes les fonctionnalités !</span>
    </div>
  </div>
);

export default AccueilPage;
