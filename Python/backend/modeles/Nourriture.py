from backend.database import db


class Nourriture(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nom = db.Column(db.String(100), nullable=False)
    image_url = db.Column(db.String(255))
    description = db.Column(db.Text)
    ingredients = db.Column(db.Text)
