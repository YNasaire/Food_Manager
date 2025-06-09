from backend.database import db


class MonBuffet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_utilisateur = db.Column(db.Integer, db.ForeignKey('utilisateur.id'), nullable=False)
    id_nourriture = db.Column(db.Integer, db.ForeignKey('nourriture.id'), nullable=True)
    id_plat = db.Column(db.Integer, db.ForeignKey('plat.id'), nullable=True)
    image_url = db.Column(db.String(255))
    date = db.Column(db.Date)
    type = db.Column(db.String(50))  # 'plat' ou 'nourriture existante'
