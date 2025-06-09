from flask import Blueprint

allergie_bp = Blueprint('allergie', __name__)

@allergie_bp.route('/allergies', methods=['GET'])
def get_allergies():
    return "Liste des allergies (exemple)"
