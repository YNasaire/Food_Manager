# Dockerfile pour backend Python/Flask

FROM python:3.10-slim

# Définir le dossier de travail dans le container
WORKDIR /app

# Copier tout le dossier Python (incluant main.py) dans /app
COPY . .

# Copier le fichier Nourriture.json dans le container
COPY Nourriture.json ./Nourriture.json

# Installer les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Exposer le port (si ton app Flask tourne sur 5000)
EXPOSE 5000

# Lancer le script principal
CMD ["python", "main.py"]
