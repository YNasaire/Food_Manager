from flask import Blueprint

favorie_bp = Blueprint('favorie', __name__)

@favorie_bp.route('/favories', methods=['GET'])
def get_favories():
    return "Liste des favoris (exemple)"
