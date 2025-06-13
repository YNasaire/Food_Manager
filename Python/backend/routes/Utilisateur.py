from flask import Blueprint, request, jsonify
from modeles.Utilisateur import Utilisateur
from database import db

utilisateur_bp = Blueprint('utilisateur', __name__)

@utilisateur_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    nom = data.get('nom')
    prenom = data.get('prenom')
    email = data.get('email')
    mot_de_passe = data.get('mot_de_passe')
    if not nom or not prenom or not email or not mot_de_passe:
        return jsonify({'error': 'Champs manquants'}), 400
    if Utilisateur.query.filter_by(email=email).first():
        return jsonify({'error': 'Utilisateur déjà existant'}), 409
    user = Utilisateur(nom=nom, prenom=prenom, email=email, mot_de_passe=mot_de_passe)
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'Utilisateur enregistré', 'user_id': user.id}), 201

@utilisateur_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    mot_de_passe = data.get('mot_de_passe')
    user = Utilisateur.query.filter_by(email=email, mot_de_passe=mot_de_passe).first()
    if user:
        return jsonify({'message': 'Connexion réussie', 'user_id': user.id, 'nom': user.nom, 'prenom': user.prenom, 'email': user.email}), 200
    else:
        return jsonify({'error': 'Identifiants invalides'}), 401
