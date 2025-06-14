import json
from database import db
from modeles.Nourriture import Nourriture
from main import app  # Importer l'app Flask

with app.app_context():
    # Charger le fichier JSON
    with open('Nourriture.json', encoding='utf-8') as f:
        data = json.load(f)

    # Insérer chaque nourriture dans la base
    for n in data:
        nourriture = Nourriture(
            nom=n['nom'],
            description=n['description'],
            ingredients=n['ingredients'],
            image_url=n['image_url']
        )
        db.session.add(nourriture)
    db.session.commit()
    print(f"{len(data)} nourritures importées dans la base de données.")
