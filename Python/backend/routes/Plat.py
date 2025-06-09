from flask import Blueprint, request, jsonify
from backend.modeles.Plat import Plat
from backend.database import db

plat_bp = Blueprint('plat', __name__)

@plat_bp.route('/plat', methods=['POST'])
def ajouter_plat():
    data = request.json
    nom = data.get('nom')
    user_id = data.get('user_id')
    if not nom or not user_id:
        return jsonify({'error': 'Champs manquants'}), 400
    p = Plat(nom=nom, user_id=user_id)
    db.session.add(p)
    db.session.commit()
    return jsonify({'message': 'Plat ajouté'}), 201

@plat_bp.route('/plat/<int:id>', methods=['DELETE'])
def supprimer_plat(id):
    p = Plat.query.get(id)
    if not p:
        return jsonify({'error': 'Plat non trouvé'}), 404
    db.session.delete(p)
    db.session.commit()
    return jsonify({'message': 'Plat supprimé'}), 200

@plat_bp.route('/plat/<int:id>', methods=['PUT'])
def mettre_a_jour_plat(id):
    p = Plat.query.get(id)
    if not p:
        return jsonify({'error': 'Plat non trouvé'}), 404
    data = request.json
    p.nom = data.get('nom', p.nom)
    db.session.commit()
    return jsonify({'message': 'Plat mis à jour'}), 200
