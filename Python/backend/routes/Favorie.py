from flask import Blueprint, request, jsonify
from modeles.Favorie import Favorie
from modeles.Nourriture import Nourriture
from database import db

favorie_bp = Blueprint('favorie', __name__)

@favorie_bp.route('/', methods=['GET'])
def get_favories():
    # Retourne tous les favoris (pour debug)
    favs = Favorie.query.all()
    return jsonify([{
        'id': f.id,
        'id_utilisateur': f.id_utilisateur,
        'id_nourriture': f.id_nourriture,
        'id_plat': f.id_plat,
        'date': f.date.isoformat() if f.date else None
    } for f in favs])

@favorie_bp.route('/user/<int:user_id>', methods=['GET'])
def get_favories_by_user(user_id):
    favs = Favorie.query.filter_by(id_utilisateur=user_id).all()
    result = []
    for f in favs:
        n = Nourriture.query.get(f.id_nourriture) if f.id_nourriture else None
        result.append({
            'id': f.id,
            'id_utilisateur': f.id_utilisateur,
            'id_nourriture': f.id_nourriture,
            'id_plat': f.id_plat,
            'nom': n.nom if n else '',
            'image_url': n.image_url if n else '',
            'description': n.description if n else '',
            'ingredients': n.ingredients if n else '',
            'date': f.date.isoformat() if f.date else None
        })
    return jsonify(result)

@favorie_bp.route('/', methods=['POST'])
def add_favorie():
    data = request.json
    id_utilisateur = data.get('id_utilisateur')
    id_nourriture = data.get('id_nourriture')
    id_plat = data.get('id_plat')
    date = data.get('date')
    if not id_utilisateur:
        return jsonify({'error': 'id_utilisateur requis'}), 400
    favorie = Favorie(
        id_utilisateur=id_utilisateur,
        id_nourriture=id_nourriture,
        id_plat=id_plat,
        date=date
    )
    db.session.add(favorie)
    db.session.commit()
    return jsonify({'message': 'Favori ajouté', 'id': favorie.id}), 201
