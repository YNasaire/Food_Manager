# Food Manager

Food Manager est une application Python/React pour gérer vos stocks alimentaires, suivre les dates de péremption et réduire le gaspillage.

---

## Prérequis

- Docker & Docker Compose (recommandé)
- (optionnel) Python 3.10+ et pip pour un usage sans Docker

---

## Structure du projet

```
.
├── backend
│   ├── config.py
│   ├── database.py
│   ├── Dockerfile
│   ├── main.py
│   ├── requirements.txt
│   └── ...
├── frontend
│   ├── Dockerfile
│   ├── package.json
│   ├── src/
│   └── ...
├── docker-compose.yml
└── ...
```

---

## Lancer le projet avec Docker

Depuis le dossier `Python/` :

### Lancer tous les services (backend, frontend, postgres)
```bash
docker compose up --build
```

### Arrêter tous les services
```bash
docker compose down
```

### Redémarrer tous les services
```bash
docker compose restart
```

### Lancer seulement le backend
```bash
docker compose up backend-python
```

### Lancer seulement le frontend
```bash
docker compose up frontend
```

### Voir les logs d’un service
```bash
docker compose logs backend-python
docker compose logs frontend
```

### Arrêter un service spécifique
```bash
docker compose stop backend-python
docker compose stop frontend
```

---

## Utilisation sans Docker (optionnel)

### Backend Python
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python main.py
```

### Frontend React
```bash
cd frontend
npm install
npm start
```
Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

---

## Contribution

Les contributions sont les bienvenues ! Veuillez ouvrir une issue ou une pull request.

## Licence

Ce projet est sous licence MIT.
