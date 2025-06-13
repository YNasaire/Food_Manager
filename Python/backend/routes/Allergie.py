from flask import Blueprint, request, jsonify
from modeles.Allergie import Allergie
from modeles.Nourriture import Nourriture
from database import db

allergie_bp = Blueprint('allergie', __name__)

@allergie_bp.route('/', methods=['GET'])
def get_allergies():
    # Retourne toutes les allergies (pour debug)
    allergies = Allergie.query.all()
    return jsonify([{
        'id': a.id,
        'id_utilisateur': a.id_utilisateur,
        'id_nourriture': a.id_nourriture,
        'id_plat': a.id_plat,
        'date': a.date.isoformat() if a.date else None
    } for a in allergies])

@allergie_bp.route('/user/<int:user_id>', methods=['GET'])
def get_allergies_by_user(user_id):
    allergies = Allergie.query.filter_by(id_utilisateur=user_id).all()
    result = []
    for a in allergies:
        n = Nourriture.query.get(a.id_nourriture) if a.id_nourriture else None
        result.append({
            'id': a.id,
            'id_utilisateur': a.id_utilisateur,
            'id_nourriture': a.id_nourriture,
            'id_plat': a.id_plat,
            'nom': n.nom if n else '',
            'image_url': n.image_url if n else '',
            'description': n.description if n else '',
            'ingredients': n.ingredients if n else '',
            'date': a.date.isoformat() if a.date else None
        })
    return jsonify(result)

@allergie_bp.route('/', methods=['POST'])
def add_allergie():
    data = request.json
    id_utilisateur = data.get('id_utilisateur')
    id_nourriture = data.get('id_nourriture')
    id_plat = data.get('id_plat')
    date = data.get('date')
    if not id_utilisateur:
        return jsonify({'error': 'id_utilisateur requis'}), 400
    allergie = Allergie(
        id_utilisateur=id_utilisateur,
        id_nourriture=id_nourriture,
        id_plat=id_plat,
        date=date
    )
    db.session.add(allergie)
    db.session.commit()
    return jsonify({'message': 'Allergie ajoutée', 'id': allergie.id}), 201
