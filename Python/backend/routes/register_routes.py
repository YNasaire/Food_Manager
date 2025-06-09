# filepath: /home/nassaramadji/Bureau/Food_Manager/Python/backend/routes/__init__.py
from backend.routes.Utilisateur import utilisateur_bp
from backend.routes.Plat import plat_bp
from backend.routes.Nourriture import nourriture_bp
from backend.routes.MonBuffet import buffet_bp
from backend.routes.Favorie import favorie_bp
from backend.routes.Allergie import allergie_bp

def register_routes(app):
    app.register_blueprint(utilisateur_bp, url_prefix='/utilisateurs')
    app.register_blueprint(plat_bp, url_prefix='/plats')
    app.register_blueprint(nourriture_bp, url_prefix='/nourritures')
    app.register_blueprint(buffet_bp, url_prefix='/buffets')
    app.register_blueprint(favorie_bp, url_prefix='/favoris')
    app.register_blueprint(allergie_bp, url_prefix='/allergies')