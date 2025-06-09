# Food Manager

Food Manager est une application Python pour gérer vos stocks alimentaires, suivre les dates de péremption et réduire le gaspillage.

## Prérequis
- Python 3.10 ou supérieur
- pip
- (optionnel) virtualenv ou python3-venv

## Fonctionnalités

- Ajout, modification et suppression d'aliments
- Suivi des quantités et des dates de péremption
- Alertes pour les produits proches de la date limite
- Interface utilisateur simple

## Installation

```bash
sudo apt update
sudo apt install python3 python3-pip python3-venv

git clone https://github.com/votre-utilisateur/Food_Manager.git
cd Food_Manager/Python/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Utilisation

```bash
python main.py
```

## Contribution

Les contributions sont les bienvenues ! Veuillez ouvrir une issue ou une pull request.

## Licence

Ce projet est sous licence MIT.

## Les structures frontend vs backend:

frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ... (autres composants réutilisables)
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Buffet.jsx
│   │   ├── Plats.jsx
│   │   └── ... (une page par vue principale)
│   ├── api.js         # Pour centraliser les appels à l’API Flask
│   ├── App.js
│   ├── index.js
│   └── ... (autres fichiers)
├── package.json
└── ...



backend/
├── __init__.py
├── config.py                # Configuration (base de données, etc.)
├── database.py              # Initialisation SQLAlchemy
├── requirements.txt
├── modeles/
│   ├── __init__.py
│   ├── Utilisateur.py
│   ├── Nourriture.py
│   ├── Plat.py
│   ├── MonBuffet.py
│   ├── Favorie.py
│   └── Allergie.py
├── routes/
│   ├── __init__.py
│   ├── Utilisateur.py       # Routes pour l'authentification et gestion utilisateur
│   ├── Nourriture.py        # Routes CRUD pour la nourriture
│   ├── Plat.py              # Routes CRUD pour les plats
│   ├── MonBuffet.py         # Routes pour le buffet de l'utilisateur
│   ├── Favorie.py           # Routes pour les favoris
│   ├── Allergie.py          # Routes pour les allergies
│   ├── register_routes.py   # Pour enregistrer tous les blueprints
│   └── ... (autres routes)
└── ...