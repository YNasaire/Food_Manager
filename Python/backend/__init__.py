#backend/__init__.py
# filepath: /home/nassaramadji/Bureau/Food_Manager/Python/backend/__init__.py
from flask import Flask
from flask_cors import CORS
from database import db
from routes.register_routes import register_routes
from config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    CORS(app, supports_credentials=True)  # Autorise toutes les origines (pour dev)

    from modeles.Utilisateur import Utilisateur
    from modeles.Nourriture import Nourriture
    from modeles.Plat import Plat
    from modeles.MonBuffet import MonBuffet
    from modeles.Favorie import Favorie
    from modeles.Allergie import Allergie

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

    register_routes(app)

    return app
