from flask import Blueprint, jsonify, request
from modeles.MonBuffet import MonBuffet
from modeles.Nourriture import Nourriture
from database import db

buffet_bp = Blueprint('buffet', __name__)

@buffet_bp.route('/<int:user_id>', methods=['GET'])
def voir_mon_buffet(user_id):
    buffet = MonBuffet.query.filter_by(id_utilisateur=user_id).all()
    result = []
    for b in buffet:
        n = Nourriture.query.get(b.id_nourriture) if b.id_nourriture else None
        result.append({
            'id': b.id,
            'id_utilisateur': b.id_utilisateur,
            'id_nourriture': b.id_nourriture,
            'id_plat': b.id_plat,
            'image_url': n.image_url if n else b.image_url,
            'nom': n.nom if n else '',
            'description': n.description if n else '',
            'ingredients': n.ingredients if n else '',
            'date': b.date.isoformat() if b.date else None,
            'type': b.type
        })
    return jsonify(result), 200

@buffet_bp.route('/', methods=['POST'])
def add_mon_buffet():
    data = request.json
    id_utilisateur = data.get('id_utilisateur')
    id_nourriture = data.get('id_nourriture')
    id_plat = data.get('id_plat')
    image_url = data.get('image_url')
    date = data.get('date')
    type_ = data.get('type')
    if not id_utilisateur:
        return jsonify({'error': 'id_utilisateur requis'}), 400
    buffet = MonBuffet(
        id_utilisateur=id_utilisateur,
        id_nourriture=id_nourriture,
        id_plat=id_plat,
        image_url=image_url,
        date=date,
        type=type_
    )
    db.session.add(buffet)
    db.session.commit()
    return jsonify({'message': 'Ajouté au buffet', 'id': buffet.id}), 201
