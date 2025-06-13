# Food_Manager

Ce projet contient deux stacks indépendantes :
- Java/Spring Boot/React/Postgres/Docker
- Python/Flask/React/Postgres/Docker

Chaque stack a son propre backend, frontend, et docker-compose.

Voir les dossiers `Java/` et `Python/` dans les README.md correspondants pour plus de détails.

.
├── =
├── docker-compose.yml
├── Java
│   ├── backend
│   │   ├── Dockerfile
│   │   ├── frontend
│   │   ├── pom.xml
│   │   ├── src
│   │   └── target
│   ├── my-python-app
│   │   ├── docker-compose.yml
│   │   ├── README.md
│   │   ├── service1
│   │   └── service2
│   └── README.md
├── logo.png
├── Python
│   ├── backend
│   │   ├── config.py
│   │   ├── database.py
│   │   ├── Dockerfile
│   │   ├── __init__.py
│   │   ├── modeles
│   │   ├── __pycache__
│   │   ├── routes
│   │   └── venv
│   ├── Dockerfile
│   ├── frontend
│   │   ├── copy_images.sh
│   │   ├── Dockerfile
│   │   ├── node_modules
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── public
│   │   ├── README.md
│   │   └── src
│   ├── import_nourritures.py
│   ├── main.py
│   ├── my-python-app
│   │   ├── docker-compose.yml
│   │   ├── README.md
│   │   ├── service1
│   │   └── service2
│   ├── __pycache__
│   │   └── main.cpython-310.pyc
│   ├── README.md
│   ├── requirements.txt
│   └── venv
│       ├── bin
│       ├── include
│       ├── lib
│       ├── lib64 -> lib
│       └── pyvenv.cfg
└── README.md


---

## Lancer le projet avec Docker

Pour démarrer les conteneurs Docker dans le dossier correspondant (Java ou Python), utilise la commande :

```bash
docker compose up
```

---

## Arrêter le projet Docker

Pour arrêter les conteneurs et les supprimer, utilise :

```bash
docker compose down
```

---

## Vérifier l’état des conteneurs Docker

Pour voir les conteneurs en cours d’exécution :

```bash
docker ps
```

---

## Redémarrer le projet

```bash
docker compose up
```

---

## Supprimer complètement (containers + volumes)

```bash
docker compose down -v
```
> Supprime aussi les données stockées dans PostgreSQL.
