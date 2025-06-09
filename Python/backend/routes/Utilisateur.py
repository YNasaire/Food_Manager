from flask import Blueprint, request, jsonify
from backend.modeles.Utilisateur import Utilisateur
from backend.database import db

utilisateur_bp = Blueprint('utilisateur', __name__)

@utilisateur_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    if not username or not password:
        return jsonify({'error': 'Champs manquants'}), 400
    if Utilisateur.query.filter_by(username=username).first():
        return jsonify({'error': 'Utilisateur déjà existant'}), 409
    user = Utilisateur(username=username, password=password)
    db.session.add(user)
    db.session.commit()
    return jsonify({'message': 'Utilisateur enregistré'}), 201

@utilisateur_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    user = Utilisateur.query.filter_by(username=username, password=password).first()
    if user:
        return jsonify({'message': 'Connexion réussie', 'user_id': user.id}), 200
    else:
        return jsonify({'error': 'Identifiants invalides'}), 401
