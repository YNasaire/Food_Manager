from flask import Blueprint, jsonify, request
from backend.modeles.MonBuffet import MonBuffet

buffet_bp = Blueprint('buffet', __name__)

@buffet_bp.route('/mon_buffet/<int:user_id>', methods=['GET'])
def voir_mon_buffet(user_id):
    buffet = MonBuffet.query.filter_by(user_id=user_id).all()
    # À adapter selon la structure de MonBuffet
    return jsonify([b.serialize() for b in buffet]), 200
