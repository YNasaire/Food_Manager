#backend/__init__.py
# filepath: /home/nassaramadji/Bureau/Food_Manager/Python/backend/__init__.py
from flask import Flask
from backend.database import db
from backend.routes.register_routes import register_routes
from backend.config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)

    from backend.modeles.Utilisateur import Utilisateur
    from backend.modeles.Nourriture import Nourriture
    from backend.modeles.Plat import Plat
    from backend.modeles.MonBuffet import MonBuffet
    from backend.modeles.Favorie import Favorie
    from backend.modeles.Allergie import Allergie

    @app.cli.command("create-tables")
    def create_tables():
        with app.app_context():
            db.create_all()
            print("Tables créées avec succès !")

    @app.route('/')
    def home():
        return "Bienvenue sur Food_Manager (Flask)!"

    @app.route('/initdb')
    def init_db():
        with app.app_context():
            db.create_all()
        return "Base de données initialisée !"

    return app
