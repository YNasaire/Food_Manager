from .Utilisateur import utilisateur_bp
from .Plat import plat_bp
from .Nourriture import nourriture_bp
from .MonBuffet import buffet_bp
from .Favorie import favorie_bp
from .Allergie import allergie_bp

def register_routes(app):
    app.register_blueprint(utilisateur_bp, url_prefix='/utilisateurs')
    app.register_blueprint(plat_bp, url_prefix='/plats')
    app.register_blueprint(nourriture_bp, url_prefix='/nourritures')
    app.register_blueprint(buffet_bp, url_prefix='/mon_buffets')
    app.register_blueprint(favorie_bp, url_prefix='/favorie')
    app.register_blueprint(allergie_bp, url_prefix='/allergies')