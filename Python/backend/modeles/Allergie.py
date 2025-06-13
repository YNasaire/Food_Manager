from database import db


class Allergie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    id_utilisateur = db.Column(db.Integer, db.ForeignKey('utilisateur.id'), nullable=False)
    id_nourriture = db.Column(db.Integer, db.ForeignKey('nourriture.id'), nullable=True)
    id_plat = db.Column(db.Integer, db.ForeignKey('plat.id'), nullable=True)
    date = db.Column(db.Date)
